import { FasterImageView } from '@candlefinance/faster-image';
import { ConnectionInfoBar } from '@components/connections/ConnectionInfoItem';
import PillButton from '@components/PillButton';
import { colors } from '@theme/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const dummyConnectionData: ConnectionInfo[] = [
  {
    title: 'Raised Voice',
    value: '05',
  },
  {
    title: 'Followers',
    value: '50k',
  },
  {
    title: 'Sphere Contact',
    value: '500',
  },
];

export const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FasterImageView source={{ url: 'https://picsum.photos/400/400' }} style={styles.avatar} />
        <PillButton title="following" onPress={() => console.log('Follow')} />
        <ConnectionInfoBar items={dummyConnectionData} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.palette.surface,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
  },
});
