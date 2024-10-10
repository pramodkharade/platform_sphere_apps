import { FasterImageView } from '@candlefinance/faster-image';
import { ActionButton, IconType } from '@components/post/PostIconButton';
import Spacer from '@components/spacer';
import typography from '@theme/styles/typography';
import { formatDate } from '@utils/dateutils';
import React, { memo } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Post } from 'types/postFeedState';

const { width } = Dimensions.get('window');

const PostItem: React.FC<Post> = memo(({ author, content, timestamp, appreciations, comments, shares }) => {
  const renderContent = () => {
    switch (content.type) {
      case 'text':
        return (
          <View style={styles.textContent}>
            <Text style={typography.body}>{content.text}</Text>
          </View>
        );
      case 'image':
        return (
          <View style={styles.contentImageContainer}>
            {content.text && content.text.trim().length > 0 && (
              <View style={styles.imageTextContainer}>
                <Text style={typography.body}>{content.text}</Text>
                <Spacer />
              </View>
            )}
            <FasterImageView
              style={styles.contentImage}
              source={{
                url: content.media || 'https://picsum.photos/200/300',
                resizeMode: 'cover',
              }}
            />
          </View>
        );
      case 'video':
        return (
          <View style={styles.contentVideo}>
            {content.text && content.text.trim().length > 0 && (
              <View style={styles.videoTextContainer}>
                <Text style={typography.body}>{content.text}</Text>
                <Spacer horizontal size={4} />
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
        <FasterImageView source={{ url: author.avatar }} style={styles.avatar} />
        <Spacer horizontal size={4} />
        <View style={styles.authorInfo}>
          <View style={styles.usernameContainer}>
            <Text style={typography.bodyBold}>{author.name}</Text>
            <Spacer horizontal size={4} />
            <Text style={typography.caption}>@{author.username}</Text>
            <Text style={typography.caption}> · {formatDate(timestamp)}</Text>
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
  textContent: {
    paddingHorizontal: 8,
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
  imageTextContainer: {
    flexDirection: 'column',
  },
  contentVideo: {
    width: width - 42,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  videoTextContainer: {
    flexDirection: 'column',
  },
  footer: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
  },
});

export default PostItem;
