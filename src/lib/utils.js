import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import mock_data from "../data.json"

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

export function modifyMockdataToCurr() {
  const products = mock_data.products.map(product => ({
    ...product,
    date: new Date().toISOString().split('T')[0],
  }));

  const orders = mock_data.orders.map(order => ({
    ...order,
    date: new Date().toISOString().split('T')[0],
    deliver_date: (new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0]
  }))

  return {
    products,
    orders,
    categories: mock_data.categories
  }
}