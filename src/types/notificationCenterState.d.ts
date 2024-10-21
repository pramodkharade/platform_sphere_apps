export interface Notification {
  id: number;
  author: Author;
  title: string;
  message: string;
  date: string;
  url: string?;
}

export interface NotificationsState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  notifications: Notification[];
}
