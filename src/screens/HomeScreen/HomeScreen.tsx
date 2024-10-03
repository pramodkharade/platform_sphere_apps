import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ListView } from '../../components/ListView';

const HomeScreen: React.FC = () => {
  const data = Array(1000)
    .fill(0)
    .map((_, index) => ({ id: index, title: `Item ${index}` }));

  const renderItem = ({ item }) => (
    <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.title}</Text>
    </View>
  );

  return <ListView data={data} renderItem={renderItem} estimatedItemSize={100} />;
};

export default HomeScreen;
