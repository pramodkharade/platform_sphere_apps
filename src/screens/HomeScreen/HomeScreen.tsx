import { ListView } from '@components/ListView';
import PostItem from '@components/post/PostItem';
import RaisedVoiceItem from '@components/voice/RaisedVoiceItem';
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
import { FlatList, ScrollView } from 'react-native-gesture-handler';
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

  const renderRaisedVoiceItem = useCallback(({ item }: { item: Post }) => <RaisedVoiceItem {...item} />, []);

  const keyExtractor = useCallback((item: Post) => item.id, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollViewContent}>
        <FlatList
          data={posts}
          renderItem={renderRaisedVoiceItem}
          keyExtractor={keyExtractor}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ paddingStart: 8 }}
        />
        <ListView
          data={posts}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          removeClippedSubviews={true}
          estimatedItemSize={239}
          onEndReachedThreshold={0.5}
          onEndReached={handleLoadMore}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.palette.surface,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default HomeScreen;
