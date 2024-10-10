import { format, parseISO } from 'date-fns';

export const formatDate = (date: Date | string, dateFormat: string = 'PP'): string => {
  try {
    const parsedDate = typeof date === 'string' ? parseISO(date) : date;
    return format(parsedDate, dateFormat);
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
};
