import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Estimates reading time from raw text content.
 * Uses 238 wpm — the median adult silent reading speed (Brysbaert 2019).
 * Returns a human-readable string like "6 min read".
 */
export function readingTime(text: string): string {
  const WPM = 238
  const words = text.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / WPM))
  return `${minutes} min read`
}
