import illustrations from '@assets/illustrations';
import Button from '@components/buttons/Button';
import Spacer from '@components/spacer';
import { colors } from '@theme/colors';
import { spacing } from '@theme/spacing';
import typography from '@theme/styles/typography';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ProfileCreatedScreen: React.FC = ({}) => {
  const { height } = useWindowDimensions();

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={[styles.scrollViewContent, { minHeight: height }]}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <Image source={illustrations.profileCreationSuccess} style={styles.image} resizeMode="contain" />
            <Text style={typography.heading1}>Congratulations</Text>
            <Spacer size={spacing.xxs} />
            <Text style={typography.caption}>Your profile has been created successfully.</Text>
            <Spacer size={spacing.xl} />
            <Button title={'Continue'} onPress={() => {}} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.palette.surface,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
  image: {
    height: 200,
    aspectRatio: 1,
    marginBottom: spacing.md,
  },
});

export default ProfileCreatedScreen;
