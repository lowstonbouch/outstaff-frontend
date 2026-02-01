import type { ButtonHTMLAttributes } from 'react';
import './button.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
}

const VARIANT_CLASS: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'button',
  secondary: 'button button_secondary',
  danger: 'button button_danger',
};

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const baseClass = VARIANT_CLASS[variant];
  const classNames = className ? `${baseClass} ${className}`.trim() : baseClass;

  return (
    <button type="button" className={classNames} {...props}>
      {children}
    </button>
  );
}
