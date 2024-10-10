import { RootState } from '@store/index';
import { AuthState } from 'types/authState';

export const selectAccessToken = (state: RootState): AuthState['accessToken'] => state.auth.accessToken;

export const selectAuthStatus = (state: RootState): AuthState['status'] => state.auth.status;

export const selectAuthError = (state: RootState): AuthState['error'] => state.auth.error;
