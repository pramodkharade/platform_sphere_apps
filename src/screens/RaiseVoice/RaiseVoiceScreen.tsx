import illustrations from '@assets/illustrations';
import BackButton from '@components/BackButton';
import Button from '@components/buttons/Button';
import Spacer from '@components/spacer';
import { colors } from '@theme/colors';
import { spacing } from '@theme/spacing';
import typography from '@theme/styles/typography';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const RaiseVoiceScreen: React.FC = () => {
  const handleDeclareIssue = () => {
    console.log('Declare Issue clicked');
  };

  const handleDeclareGoodThings = () => {
    console.log('Declare Good Things clicked');
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <View style={styles.header}>
        {/* Uncomment below line if you are using Ionicons */}
        {/* <Ionicons name="chevron-back" size={24} color={colors.text} /> */}
      </View>

      <View style={styles.content}>
        <Text style={[typography.heading1]}>Raise Voice</Text>
        <Text style={typography.caption}>Select the way in which you want to raise a voice.</Text>
        <Image source={illustrations.raiseVoice} style={styles.illustration} resizeMode="contain" />
        <Button title="Declare Issue" onPress={handleDeclareIssue} />
        <Spacer />
        <Button title="Declare Good Things" onPress={handleDeclareGoodThings} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
  },
  titleIcon: {
    width: spacing.md,
    height: spacing.md,
    marginLeft: spacing.xs,
  },
  illustration: {
    width: 200,
    aspectRatio: 1,
    marginBottom: 32,
  },
  buttonContainer: {
    width: '100%',
  },
});

export default RaiseVoiceScreen;
