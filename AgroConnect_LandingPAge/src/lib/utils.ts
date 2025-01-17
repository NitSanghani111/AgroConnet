import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...classes: string[]) {
    return classes.join(' ');
  }
export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num)
}

// src/lib/utils.ts