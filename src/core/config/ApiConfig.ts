/**
 * Singleton configuration provider for API endpoints and environments.
 */
export class ApiConfig {
  private static instance: ApiConfig;
  private readonly _baseUrl: string;
  private readonly _useMock: boolean;
  private readonly _timeoutMs: number;
  private readonly _maxRetries: number;

  private constructor() {
    const envUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    // In browser, if envUrl is empty or localhost:3000 but running on another port, use relative path
    if (typeof window !== 'undefined' && (!envUrl || envUrl.includes('localhost'))) {
      this._baseUrl = '';
    } else {
      this._baseUrl = envUrl || '';
    }
    this._useMock = process.env.NEXT_PUBLIC_USE_MOCK !== 'false';
    this._timeoutMs = 8000;
    this._maxRetries = 2;
  }

  public static getInstance(): ApiConfig {
    if (!ApiConfig.instance) {
      ApiConfig.instance = new ApiConfig();
    }
    return ApiConfig.instance;
  }

  public get baseUrl(): string {
    return this._baseUrl;
  }

  public get useMock(): boolean {
    return this._useMock;
  }

  public get timeoutMs(): number {
    return this._timeoutMs;
  }

  public get maxRetries(): number {
    return this._maxRetries;
  }
}
