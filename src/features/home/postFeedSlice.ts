import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post, PostFeedState } from 'types/postFeedState';

interface ApiResponse {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const initialState: PostFeedState = {
  status: 'idle',
  error: null,
  postFeed: {
    posts: [],
    currentPage: 0,
    totalPages: 0,
  },
};

const mapApiResponseToPost = (data: ApiResponse[]): Post[] => {
  return data.map((item) => ({
    id: item.id.toString(),
    author: {
      name: `User ${item.userId}`,
      username: `user${item.userId}`,
      avatar: `https://via.placeholder.com/150?text=User${item.userId}`,
    },
    content: {
      type: 'text',
      text: item.body,
    },
    timestamp: new Date().toISOString(), // Mock timestamp
    appreciations: Math.floor(Math.random() * 1000),
    comments: Math.floor(Math.random() * 100),
    shares: Math.floor(Math.random() * 50),
  }));
};

export const fetchPostFeed = createAsyncThunk('postFeed/fetchPostFeed', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const posts = mapApiResponseToPost(data);
    return {
      posts,
      currentPage: 1,
      totalPages: 10,
    };
  } catch (error) {
    return rejectWithValue('Failed to fetch post feed');
  }
});

const postFeedSlice = createSlice({
  name: 'postFeed',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.postFeed.currentPage = action.payload;
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostFeed.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPostFeed.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.postFeed = action.payload;
      })
      .addCase(fetchPostFeed.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { setCurrentPage } = postFeedSlice.actions;

export default postFeedSlice.reducer;
