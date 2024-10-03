import { FasterImageView } from '@candlefinance/faster-image';
import React, { memo } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface PostProps {
  id: string;
  author: {
    name: string;
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
          <FasterImageView
            style={styles.contentImage}
            source={{
              url: content.media || 'https://picsum.photos/200/300',
              resizeMode: 'contain',
            }}
          />
        );
      case 'video':
        // Implement video component here
        return (
          <View style={styles.contentVideo}>
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
        <FasterImageView source={{ url: author.avatar }} style={styles.avatar} />
        <View style={styles.authorInfo}>
          <Text style={styles.authorName}>{author.name}</Text>
          <Text style={styles.timestamp}>{timestamp}</Text>
        </View>
      </View>
      {renderContent()}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text>👍 {appreciations}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text>💬 {comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text>↗️ {shares}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    width: width - 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
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
  contentImage: {
    width: width - 20,
    aspectRatio: ((width - 20) * 9) / 16,
    marginBottom: 10,
  },
  contentVideo: {
    width: width - 20,
    aspectRatio: ((width - 20) * 9) / 16,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },
});

export default PostItem;
