import authReducer from '@features/auth/authSlice';
import postFeedReducer from '@features/home/postFeedSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  auth: authReducer,
  postFeed: postFeedReducer,
});

export default rootReducer;
