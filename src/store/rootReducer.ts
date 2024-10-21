import authReducer from '@features/auth/authSlice';
import postFeedReducer from '@features/home/postFeedSlice';
import notificationCenterReducer from '@features/notificationccenter/notificationCenterSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  auth: authReducer,
  postFeed: postFeedReducer,
  notificationCenter: notificationCenterReducer,
});

export default rootReducer;
