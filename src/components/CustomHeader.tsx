import illustrations from '@assets/illustrations';
import { colors } from '@theme/colors';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

interface CustomHeaderProps {
  navigation: any;
}
const CustomHeader: React.FC<CustomHeaderProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.headerContainer}>
        <IconButton
          icon={({ size, color }) => (
            <Image source={illustrations.back} style={{ width: size, height: size, tintColor: color }} />
          )}
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    justifyContent: 'center',
    backgroundColor: colors.palette.surface,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
