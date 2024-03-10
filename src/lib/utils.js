import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function filterByAnyValue(arr, searchValue) {
  return arr.filter((product) =>
    Object.values(product).some((value) =>
      typeof value === 'string' && value.toLowerCase().includes(searchValue.toLowerCase())
    )
  );
}