import { ClassValue } from 'clsx';
export { VariantProps, cva } from 'class-variance-authority';

declare function cn(...inputs: ClassValue[]): string;

export { cn };
