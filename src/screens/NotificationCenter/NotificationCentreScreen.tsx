import { ListView } from '@components/ListView';
import NotificationItem from '@components/notification/NotificationItem';
import { fetchNotifications } from '@features/notificationccenter/notificationCenterSlice';
import { selectNotifications } from '@features/notificationccenter/notificationSelectors';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { colors } from '@theme/colors';
import React, { useCallback, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Notification } from 'types/notificationCenterState';

const NotificationCentreScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector(selectNotifications);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  const renderItem = useCallback(({ item }: { item: Notification }) => <NotificationItem {...item} />, []);

  return (
    <SafeAreaView style={styles.container}>
      <ListView data={notifications} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.palette.surface,
  },
});

export default NotificationCentreScreen;
