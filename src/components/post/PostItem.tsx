import { FasterImageView } from '@candlefinance/faster-image';
import React, { memo } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Spacer from '../spacer';

interface PostProps {
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
}

const { width } = Dimensions.get('window');

const PostItem: React.FC<PostProps> = memo(({ author, content, timestamp, appreciations, comments, shares }) => {
  /**
   * Renders the content of a post based on its type (text, image, video).
   *
   * @returns {React.ReactElement} The rendered content.
   */
  const renderContent = () => {
    switch (content.type) {
      case 'text':
        return <Text style={styles.contentText}>{content.text}</Text>;
      case 'image':
        return (
          <View style={styles.contentImageContainer}>
            {content.text && content.text.trim().length > 0 && <Text style={styles.contentText}>{content.text}</Text>}
            <FasterImageView
              style={styles.contentImage}
              source={{
                url: content.media || 'https://picsum.photos/200/300',
                resizeMode: 'cover',
                borderRadius: 8,
              }}
            />
          </View>
        );
      case 'video':
        // Implement video component here
        return (
          <View style={styles.contentVideo}>
            {content.text && content.text.trim().length > 0 && <Text style={styles.contentText}>{content.text}</Text>}
            <Text>Video Player</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FasterImageView
          source={{
            url: author.avatar,
            borderRadius: 24,
          }}
          style={styles.avatar}
        />
        <View style={styles.authorInfo}>
          <View style={styles.usernameContainer}>
            <Text style={styles.authorName}>{author.name}</Text>
            <Text style={styles.authorUsername}>@{author.username}</Text>
            <Text style={styles.timestamp}> · {timestamp}</Text>
          </View>
        </View>
      </View>
      {renderContent()}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text>👍 {appreciations}</Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        <TouchableOpacity style={styles.actionButton}>
          <Text>💬 {comments}</Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        <TouchableOpacity style={styles.actionButton}>
          <Text>↗️ {shares}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    paddingVertical: 10,
    marginBottom: 10,
    width: width - 42,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
  authorInfo: {
    flex: 1,
  },
  usernameContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  authorUsername: {
    color: '#666',
    marginLeft: 5,
  },
  authorName: {
    color: '#0F1419',
    fontWeight: 'bold',
    fontSize: 16,
  },
  timestamp: {
    color: '#666',
    fontSize: 12,
  },
  contentText: {
    fontSize: 16,
    marginBottom: 10,
  },
  contentImageContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentImage: {
    width: width - 42,
    aspectRatio: 16 / 9,
    marginBottom: 10,
  },
  contentVideo: {
    width: width - 42,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    paddingTop: 2,
    paddingHorizontal: 8,
  },
  actionButton: {
    alignItems: 'center',
    paddingVertical: 5,
  },
});

export default PostItem;
