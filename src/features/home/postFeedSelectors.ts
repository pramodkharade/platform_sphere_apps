import { RootState } from '@store/index';
import { Post, PostFeedState } from 'types/postFeedState';

// Selector to get the post feed state
export const selectPostFeedState = (state: RootState): PostFeedState => state.postFeed;

// Selector to get the posts
export const selectPosts = (state: RootState): Post[] => selectPostFeedState(state).postFeed.posts;

// Selector to get the current page
export const selectCurrentPage = (state: RootState): number => selectPostFeedState(state).postFeed.currentPage;

// Selector to get the total pages
export const selectTotalPages = (state: RootState): number => selectPostFeedState(state).postFeed.totalPages;

// Selector to get the status
export const selectStatus = (state: RootState): PostFeedState['status'] => selectPostFeedState(state).status;

// Selector to get the error message
export const selectError = (state: RootState): string | null => selectPostFeedState(state).error;
