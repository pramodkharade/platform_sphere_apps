import illustrations from '@assets/illustrations';
import Spacer from '@components/spacer';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { colors } from '@theme/colors';
import typography from '@theme/styles/typography';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface NavigationBarProps {
  title: string;
  isBackEnabled: boolean;
  onBackPress?: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ title, isBackEnabled: is = true, onBackPress }) => {
  const navigation = useNavigation<NavigationProp<any>>();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Spacer />
      {is ? (
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Image source={illustrations.back} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      ) : null}
      <Text style={typography.heading2}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.palette.surface,
  },
  backButton: {
    position: 'absolute',
    left: 8,
    padding: 8,
  },
});

export default NavigationBar;
