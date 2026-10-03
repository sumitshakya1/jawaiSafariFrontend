import { ApiConfig } from '@/core/config/ApiConfig';

export interface RequestOptions extends RequestInit {
  timeoutMs?: number;
  retries?: number;
}

/**
 * Singleton HTTP client handling fetch operations, timeouts, retries, and unified error handling.
 */
export class ApiClient {
  private static instance: ApiClient;
  private readonly config: ApiConfig;

  private constructor() {
    this.config = ApiConfig.getInstance();
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  public async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const url = endpoint.startsWith('http')
      ? endpoint
      : `${this.config.baseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

    const timeout = options.timeoutMs ?? this.config.timeoutMs;
    const maxRetries = options.retries ?? this.config.maxRetries;

    let attempt = 0;
    let lastError: Error | null = null;

    while (attempt <= maxRetries) {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);

      try {
        const response = await fetch(url, {
          ...options,
          signal: controller.signal,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...(options.headers || {}),
          },
        });

        clearTimeout(id);

        if (!response.ok) {
          const errorBody = await response.text().catch(() => '');
          throw new Error(`API HTTP ${response.status} (${response.statusText}): ${errorBody || 'Request failed'}`);
        }

        const data: T = await response.json();
        return data;
      } catch (err: unknown) {
        clearTimeout(id);
        const error = err instanceof Error ? err : new Error(String(err));
        lastError = error;

        // Do not retry on client 4xx errors if method is POST/PUT
        if (options.method && options.method !== 'GET' && !error.name.includes('Abort')) {
          throw error;
        }

        attempt++;
        if (attempt <= maxRetries) {
          await new Promise((res) => setTimeout(res, attempt * 200));
        }
      }
    }

    throw lastError || new Error(`Request to ${url} failed after ${maxRetries} retries`);
  }

  public get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  public post<T>(endpoint: string, body: unknown, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  public put<T>(endpoint: string, body: unknown, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  public delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
}
