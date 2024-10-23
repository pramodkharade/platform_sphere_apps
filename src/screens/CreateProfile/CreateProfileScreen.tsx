import illustrations from '@assets/illustrations';
import PrimaryButton from '@components/PrimaryButton';
import SecondaryButton from '@components/SecondaryButton';
import Spacer from '@components/spacer';
import { colors } from '@theme/colors';
import { spacing } from '@theme/spacing';
import typography from '@theme/styles/typography';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CreateProfileScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text style={typography.heading1}>Create Profile</Text>
        <Text style={typography.captionBold}>Select the type of profile you want to create</Text>
        <Spacer size={spacing.lg} />
        <Image source={illustrations.createProfile} style={styles.image} resizeMode="contain" />

        <Spacer size={spacing.lg} />
        <PrimaryButton title="Personal Profile" onPress={() => {}} />
        <Spacer size={spacing.md} />
        <SecondaryButton title="Organizational Profile" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.palette.surface,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: spacing.lg,
  },
  image: {
    aspectRatio: 1,
    height: 240,
    alignSelf: 'center',
  },
});

export default CreateProfileScreen;
