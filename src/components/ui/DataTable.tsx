'use client';

import React from 'react';
import { ListRendererFactory, ListRendererVariant } from '@/core/factories/ListRendererFactory';
import { ISpecificationRowDTO } from '@/types';

export interface DataTableProps {
  items: ISpecificationRowDTO[];
  variant?: ListRendererVariant;
  className?: string;
}

/**
 * Generic reusable table/spec list component powered by polymorphic ListRendererFactory.
 */
export function DataTable({
  items,
  variant = 'block',
  className = '',
}: DataTableProps) {
  const renderer = ListRendererFactory.create(variant);

  return (
    <div className={`${renderer.getContainerClasses()} ${className}`.trim()}>
      {items.map((item, index) => renderer.renderRow(item, index))}
    </div>
  );
}

export { DataTable as SpecList };
