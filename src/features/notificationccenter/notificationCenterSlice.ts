import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Notification, NotificationsState } from 'types/notificationCenterState';

interface ApiResponse {
  results: {
    id: number;
    name: {
      first: string;
      last: string;
    };
    picture: {
      thumbnail: string;
    };
  }[];
}

const initialState: NotificationsState = {
  status: 'idle',
  error: null,
  notifications: [],
};

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=100&nc=name,picture');
      const data = await response.json();
      const notifications = mapApiResponseToNotifications(data);
      return notifications;
    } catch (error) {
      return rejectWithValue('Failed to fetch notifications');
    }
  }
);

const notificationCenterSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch notifications';
      });
  },
});

const mapApiResponseToNotifications = (data: ApiResponse): Notification[] => {
  return data.results.map((item) => ({
    id: item.id,
    author: {
      name: [item.name.first, item.name.last].join(' '),
      username: item.name.first,
      avatar: item.picture.thumbnail,
    },
    title: 'Lorep ipsum',
    message:
      'Lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum',
    date: new Date().toISOString(),
    url: '#',
  }));
};

export default notificationCenterSlice.reducer;
