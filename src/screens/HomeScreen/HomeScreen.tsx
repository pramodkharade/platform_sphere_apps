import { ListView } from '@components/ListView';
import PostItem from '@components/post/PostItem';
import {
  selectCurrentPage,
  selectError,
  selectPosts,
  selectStatus,
  selectTotalPages,
} from '@features/home/postFeedSelectors';
import { fetchPostFeed, setCurrentPage } from '@features/home/postFeedSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { colors } from '@theme/colors';
import React, { useCallback, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Post } from 'types/postFeedState';

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const currentPage = useAppSelector(selectCurrentPage);
  const totalPages = useAppSelector(selectTotalPages);
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(fetchPostFeed());
  }, [dispatch]);

  const handleLoadMore = useCallback(() => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  }, [dispatch, currentPage, totalPages]);

  const renderItem = useCallback(({ item }: { item: Post }) => <PostItem {...item} />, []);

  const keyExtractor = useCallback((item: Post) => item.id, []);

  return (
    <SafeAreaView style={styles.container}>
      <ListView
        data={posts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        removeClippedSubviews={true}
        estimatedItemSize={239}
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMore}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.palette.surface,
  },
});

export default HomeScreen;
