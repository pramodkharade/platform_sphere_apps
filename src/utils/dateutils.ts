import { format, formatDistanceToNow, parseISO } from 'date-fns';

/**
 * Format a given date as a string.
 * @param date - The date to format. Can be a Date object or a string representing a date.
 * @param dateFormat - The format for the date string. Default is 'PP' (e.g., April 12, 2022).
 * @returns A string representing the formatted date.
 */
export const formatDate = (date: Date | string, dateFormat: string = 'PP'): string => {
  try {
    const parsedDate = typeof date === 'string' ? parseISO(date) : date;
    return format(parsedDate, dateFormat);
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
};

/**
 * Converts a date timestamp to a relative time format.
 * @param date - The date to convert. Can be a Date object or a string.
 * @returns A string representing the relative time (e.g., "1 day ago", "2 days ago", "now").
 */
export const timeAgo = (date: Date | string): string => {
  try {
    // Parse the date if it's a string
    const parsedDate = typeof date === 'string' ? parseISO(date) : date;
    // Get the relative time format
    return formatDistanceToNow(parsedDate, { addSuffix: true });
  } catch (error) {
    console.error('Error converting date:', error);
    return '';
  }
};
