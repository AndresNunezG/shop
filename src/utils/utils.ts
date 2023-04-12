import { UUID } from "crypto"

export function formatCurrency (value: number): string {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).replace('$', '')
}

export function getRandomImage(): string {
  const min = 1
  const max = 7
  const randInt = Math.floor(Math.random() * (max - min + 1) + min)
  return new URL(`../assets/images/stock-image-${randInt}.jpg`, import.meta.url).href
}

export function createDebounce() {
  let timeout: ReturnType<typeof setTimeout>;
  return function (fnc: Function, delayMs: number = 1000) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fnc();
    }, delayMs);
  };
}

export function capitalizeString(value: string): string {
  const firstLetter = value.charAt(0).toLocaleUpperCase()
  const stringSlice = value.slice(1, value.length)
  return firstLetter + stringSlice
}

export interface Product {
  id: UUID
  name: string;
  unit_price: number;
  stock: number;
}

export interface ProductItemCart {
  name: string;
  id: UUID;
  product_id: UUID;
  unit_price: number;
  total_units: number;
  total_price: number;
}

export enum ToastType {
  Info = "INFO",
  Alert = "ALERT",
  Warning = "WARNING",
}

export interface Notification {
  id: UUID;
  message: string;
  type: ToastType;
}
