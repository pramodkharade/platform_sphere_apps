import { ListView } from '@components/ListView';
import NotificationItem from '@components/notification/NotificationItem';
import { fetchNotifications } from '@features/notificationccenter/notificationCenterSlice';
import { selectNotifications } from '@features/notificationccenter/notificationSelectors';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { colors } from '@theme/colors';
import { spacing } from '@theme/spacing';
import typography from '@theme/styles/typography';
import { splitNotificationsByDate } from '@utils/notificationUtils';
import React, { useCallback, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Notification } from 'types/notificationCenterState';

interface ListItemProps {
  type: 'header' | 'item';
  title?: string;
  item?: Notification;
}

const NotificationCentreScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector(selectNotifications);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  const { todayNotifications, pastNotifications } = splitNotificationsByDate(notifications);

  const mergedList: ListItemProps[] = [
    { type: 'header' as const, title: 'Today' },
    ...todayNotifications.map((notification) => ({ type: 'item' as const, item: notification })),
    { type: 'header', title: 'Past' },
    ...pastNotifications.map((notification) => ({ type: 'item' as const, item: notification })),
  ];

  const renderItem = useCallback(({ item }: { item: ListItemProps }) => {
    if (item.type === 'header') {
      return (
        <View style={styles.header}>
          <Text style={typography.bodyBold}>{item.title}</Text>
        </View>
      );
    }
    if (item.type === 'item' && item.item) {
      return <NotificationItem {...item.item} />;
    }
    return null;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ListView data={mergedList} renderItem={renderItem} estimatedItemSize={50} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.palette.surface,
  },
  header: {
    marginVertical: spacing.xs,
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xs,
    backgroundColor: '#DADAFC',
    borderRadius: 18,
    marginStart: spacing.sm,
  },
});

export default NotificationCentreScreen;
