import illustrations from '@assets/illustrations';
import CenteredImageScreen from '@components/templates/CenteredImageScreen';
import { colors } from '@theme/colors';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PasswordChangedScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CenteredImageScreen
        imageSource={illustrations.passwordChanged}
        headerText="Password Changed!"
        bodyText="Your password has been changed successfully."
        buttonText="Back to Login"
        onButtonPress={() => {}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.palette.surface,
  },
});

export default PasswordChangedScreen;
