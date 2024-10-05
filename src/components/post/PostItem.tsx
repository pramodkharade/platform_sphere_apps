import { FasterImageView } from '@candlefinance/faster-image';
import React, { memo } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import typography from '../../theme/styles/typography';
import Spacer from '../spacer';
import { IconType } from './PostIconButton';
import ActionButton from './PostIconButton';

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
        return (
          <View style={{ paddingHorizontal: 8 }}>
            <Text style={typography.body}>{content.text}</Text>
          </View>
        );
      case 'image':
        return (
          <View style={styles.contentImageContainer}>
            {content.text && content.text.trim().length > 0 && (
              <View style={{ flexDirection: 'column' }}>
                <Text style={typography.body}>{content.text}</Text>
                <Spacer />
              </View>
            )}
            <View style={styles.contentImageContainer}>
              <FasterImageView
                style={styles.contentImage}
                source={{
                  url: content.media || 'https://picsum.photos/200/300',
                  resizeMode: 'cover',
                }}
              />
            </View>
          </View>
        );
      case 'video':
        // Implement video component here
        return (
          <View style={styles.contentVideo}>
            {content.text && content.text.trim().length > 0 && (
              <View style={{ flexDirection: 'column' }}>
                <Text style={typography.body}>{content.text}</Text>
                <Spacer horizontal={true} size={4} />
              </View>
            )}
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
        <View style={styles.avatar}>
          <FasterImageView source={{ url: author.avatar }} style={styles.avatar} />
        </View>
        <Spacer horizontal={true} size={4} />
        <View style={styles.authorInfo}>
          <View style={styles.usernameContainer}>
            <Text style={typography.bodyBold}>{author.name}</Text>
            <Spacer horizontal={true} size={4} />
            <Text style={typography.caption}>@{author.username}</Text>
            <Text style={typography.caption}> · {timestamp}</Text>
          </View>
        </View>
      </View>
      {renderContent()}
      <View style={styles.footer}>
        <ActionButton icon={IconType.Appreciation} text={appreciations.toString()} onPress={() => {}} />
        <ActionButton icon={IconType.Comment} text={comments.toString()} onPress={() => {}} />
        <ActionButton icon={IconType.Share} text={shares.toString()} onPress={() => {}} />
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
    borderRadius: 24,
    overflow: 'hidden',
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
  contentImageContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 12,
    overflow: 'hidden',
  },
  contentImage: {
    width: width - 56,
    aspectRatio: 16 / 9,
  },
  contentVideo: {
    width: width - 42,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
  },
});

export default PostItem;
