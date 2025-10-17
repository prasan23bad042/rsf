import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculate detailed age from a birth date
 * @param birthDate - The birth date to calculate age from
 * @returns Object with years, months, and days
 */
export function calculateDetailedAge(birthDate: Date): {
  years: number;
  months: number;
  days: number;
} {
  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Adjust for negative days first
  if (days < 0) {
    months--;
    // Get the last day of the previous month
    const prevMonthLastDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += prevMonthLastDay;
  }

  // Adjust for negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

/**
 * Format detailed age into a readable string
 * @param birthDate - The birth date to calculate age from
 * @returns Formatted age string like "19 years 10 months 11 days"
 */
export function formatDetailedAge(birthDate: Date): string {
  const { years, months, days } = calculateDetailedAge(birthDate);

  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} year${years > 1 ? "s" : ""}`);
  }

  if (months > 0) {
    parts.push(`${months} month${months > 1 ? "s" : ""}`);
  }

  if (days > 0) {
    parts.push(`${days} day${days > 1 ? "s" : ""}`);
  }

  // If no parts (shouldn't happen), return "0 days"
  if (parts.length === 0) {
    return "0 days";
  }

  return parts.join(" ");
}

/**
 * Get the birth date for Ruth Shirley (October 25, 2005)
 */
export function getBirthDate(): Date {
  return new Date(2005, 9, 25); // Month is 0-indexed (9 = October)
}

/**
 * Get current detailed age string for Ruth Shirley
 */
export function getCurrentAge(): string {
  return formatDetailedAge(getBirthDate());
}
