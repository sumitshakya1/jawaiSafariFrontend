import React from 'react';
import { ISpecificationRowDTO } from '@/types';

/**
 * Abstract class defining row and container rendering for table-like and spec-list structures.
 */
export abstract class BaseListRenderer<T> {
  public abstract getContainerClasses(): string;
  public abstract getRowClasses(item: T, index: number): string;
  public abstract getLabelClasses(item: T): string;
  public abstract getValueClasses(item: T): string;
  public abstract renderRow(item: T, index: number): React.ReactNode;
}

/**
 * Block Specification Card List (used in Safari phase briefings)
 */
export class BlockSpecRenderer extends BaseListRenderer<ISpecificationRowDTO> {
  public getContainerClasses(): string {
    return 'flex flex-col gap-3';
  }

  public getRowClasses(): string {
    return 'bg-surface-container-low p-4 flex items-center justify-between';
  }

  public getLabelClasses(): string {
    return 'font-label-nav text-label-nav uppercase tracking-widest text-on-surface-variant';
  }

  public getValueClasses(item: ISpecificationRowDTO): string {
    return `font-headline-sm text-body-sm font-semibold ${item.highlight ? 'text-primary' : 'text-on-surface'}`;
  }

  public renderRow(item: ISpecificationRowDTO, index: number): React.ReactNode {
    return React.createElement(
      'div',
      { key: item.id || index, className: this.getRowClasses() },
      React.createElement('span', { className: this.getLabelClasses() }, item.label),
      React.createElement('span', { className: this.getValueClasses(item) }, item.value)
    );
  }
}

/**
 * Hairline Border Protocol Table List (used in Sanctuary expedition protocols)
 */
export class HairlineProtocolRenderer extends BaseListRenderer<ISpecificationRowDTO> {
  public getContainerClasses(): string {
    return 'space-y-3 pt-2';
  }

  public getRowClasses(): string {
    return 'flex items-center justify-between text-body-sm py-2 border-b border-on-surface/5';
  }

  public getLabelClasses(): string {
    return 'text-on-surface-variant font-medium';
  }

  public getValueClasses(item: ISpecificationRowDTO): string {
    return `${item.highlight ? 'text-primary font-semibold' : 'text-on-surface font-semibold'}`;
  }

  public renderRow(item: ISpecificationRowDTO, index: number): React.ReactNode {
    return React.createElement(
      'div',
      { key: item.id || index, className: this.getRowClasses() },
      React.createElement('span', { className: this.getLabelClasses() }, item.label),
      React.createElement('span', { className: this.getValueClasses(item) }, item.value)
    );
  }
}
