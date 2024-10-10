import { colors } from '@theme/colors';
import typography from '@theme/styles/typography';
import { formatDate } from '@utils/dateutils';
import React, { memo } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Post } from 'types/postFeedState';

const { width } = Dimensions.get('window');

const RaisedVoiceItem: React.FC<Post> = memo(({ author, content, timestamp }) => {
  return (
    <View style={styles.container}>
      <Text style={typography.bodyBold}>{author.name}</Text>
      <View style={styles.usernameContainer}>
        <Text style={typography.caption}>@{author.username}</Text>
        <Text style={typography.caption}> · {formatDate(timestamp)}</Text>
      </View>
      <Text style={typography.body} numberOfLines={4} ellipsizeMode="tail">
        {content.text}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: width * 0.42,
    aspectRatio: 1,
    backgroundColor: colors.palette.tertiary,
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 4,
  },
  usernameContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    marginBottom: 4,
  },
});

export default RaisedVoiceItem;
