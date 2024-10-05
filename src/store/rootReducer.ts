import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice';
import postFeedReducer from '../features/home/postFeedSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  postFeed: postFeedReducer,
});

export default rootReducer;
