import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ListView } from '../../components/ListView';
import PostItem from '../../components/post/PostItem';

type Post = {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  content: {
    type: 'text' | 'image' | 'video';
    text?: string;
    media?: string;
  };
  timestamp: string;
  appreciations: number;
  comments: number;
  shares: number;
};

const generateDummyPosts = (count: number): Post[] => {
  return Array(count)
    .fill(0)
    .map((_, index) => ({
      id: `post-${index}`,
      author: {
        name: `User ${index + 1}`,
        username: `user${index + 1}`,
        avatar: `https://via.placeholder.com/150?text=User${index + 1}`,
      },
      content: {
        type: index % 3 === 0 ? 'text' : index % 3 === 1 ? 'image' : 'video',
        text:
          index % 2 === 0
            ? `This is a sample text post number ${index + 1}. It can contain multiple sentences to simulate a real post.`
            : undefined,
        media: index % 3 !== 0 ? `https://via.placeholder.com/500x300?text=Post${index + 1}` : undefined,
      },
      timestamp: '2 hours ago', // Posts every hour
      appreciations: Math.floor(Math.random() * 1000),
      comments: Math.floor(Math.random() * 100),
      shares: Math.floor(Math.random() * 50),
    }));
};

const HomeScreen: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(() => generateDummyPosts(20));

  const renderItem = useCallback(({ item }: { item: Post }) => <PostItem {...item} />, []);

  const keyExtractor = useCallback((item: Post) => item.id, []);

  return (
    <SafeAreaView style={styles.container}>
      <ListView
        data={posts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        removeClippedSubviews={true}
        estimatedItemSize={posts.length}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default HomeScreen;
