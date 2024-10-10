import Spacer from '@components/spacer';
import { colors } from '@theme/colors';
import { spacing } from '@theme/spacing';
import typography from '@theme/styles/typography';
import { timeAgo } from '@utils/dateutils';
import { memo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Notification } from 'types/notificationCenterState';

const NotificationItem = memo(({ author, message, date }: Notification) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: author.avatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={typography.body}>{author.name}</Text>
          <Spacer horizontal size={4} />
          <Text style={typography.caption}>@{author.username}</Text>
          <View style={styles.spacer} />
        </View>
        <Text style={typography.caption} numberOfLines={1}>
          {timeAgo(date)}
        </Text>
        <Text style={typography.caption} numberOfLines={2}>
          {message}
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.sm,
    backgroundColor: colors.palette.surface,
    borderBottomWidth: spacing.xxs,
    borderBottomColor: colors.palette.divider,
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  spacer: {
    flex: 1,
  },
});

export default NotificationItem;
