// lib/utils.ts
import { parseISO, format, isValid } from 'date-fns';

export function formatDate(dateString: string): string {
  try {
    const date = parseISO(dateString);

    if (!isValid(date)) {
      throw new Error('Invalid date');
    }

    return format(date, 'MMMM d, yyyy');
  } catch (error) {
    console.error('Error formatting date:', error, dateString);
    return dateString || 'Recent';
  }
}
