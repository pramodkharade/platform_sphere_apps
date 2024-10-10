import { RootState } from '@store/index';
import { NotificationsState } from 'types/notificationCenterState';

export const selectNotificationCenter = (state: RootState): NotificationsState => state.notificationCenter;

export const selectNotifications = (state: RootState): NotificationsState['notifications'] =>
  selectNotificationCenter(state).notifications;
