import typography from '@theme/styles/typography';
import { memo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Notification } from 'types/notificationCenterState';

const NotificationItem = memo(({ author, title, message, date }: Notification) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: author.avatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={typography.body}>{message}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
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
});

export default NotificationItem;
