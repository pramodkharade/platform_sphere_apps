// Define the type for content within a post
export type PostContentType = 'text' | 'image' | 'video';

/**
 * Interface representing an author
 */
export interface Author {
  name: string;
  fullname: string;
  username: string;
  avatar: string;
}

/**
 * Interface representing the content of a post
 */
export interface PostContent {
  type: PostContentType;
  text?: string; // Optional: Only needed for text content
  media?: string; // Optional: URL for image or video content
}

/**
 * Interface representing a single post
 */
export interface Post {
  id: string;
  author: Author;
  content: PostContent;
  timestamp: string;
  appreciations: number;
  comments: number;
  shares: number;
}

/**
 * Interface representing the post feed with pagination details
 */
export interface PostFeed {
  posts: Post[];
  currentPage: number;
  totalPages: number;
}

/**
 * State interface for managing the post feed in Redux
 */
export interface PostFeedState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  postFeed: PostFeed;
}
