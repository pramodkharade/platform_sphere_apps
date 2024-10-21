import { isToday, parseISO } from 'date-fns';
import { Notification } from 'types/notificationCenterState';

/**
 * Splits a list of notifications into two lists: today's notifications and past notifications.
 * @param notifications - The list of notifications to split.
 * @returns An object containing two lists: today and past.
 */
export const splitNotificationsByDate = (notifications: Notification[]) => {
  const todayNotifications: Notification[] = [];
  const pastNotifications: Notification[] = [];

  notifications.forEach((notification) => {
    const notificationDate = typeof notification.date === 'string' ? parseISO(notification.date) : notification.date;
    if (isToday(notificationDate)) {
      todayNotifications.push(notification);
    } else {
      pastNotifications.push(notification);
    }
  });

  return { todayNotifications, pastNotifications };
};
