'use client';

import React from 'react';
import Link from 'next/link';
import { ButtonFactory, ButtonVariantType } from '@/core/factories/ButtonFactory';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantType;
  href?: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

/**
 * Global reusable Button component driven by polymorphic OOP BaseButton classes.
 */
export function Button({
  variant = 'primary-editorial',
  href,
  icon,
  iconPosition = 'right',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const buttonEntity = ButtonFactory.create(variant);
  const classes = buttonEntity.getClasses(className);
  const iconClasses = buttonEntity.getIconClasses();

  const iconElement = icon ? (
    <span className={iconClasses}>{icon}</span>
  ) : null;

  const content = (
    <>
      {icon && iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {icon && iconPosition === 'right' && iconElement}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={props.onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
