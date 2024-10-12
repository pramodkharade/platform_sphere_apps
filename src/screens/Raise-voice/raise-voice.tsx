import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native';
import Button from '../../components/Buttons/button';
import { colors } from '@theme/colors';
import typography from '@theme/styles/typography';
import BackButton from '@components/BackButton';

const { width } = Dimensions.get('window');

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
        <View style={styles.titleContainer}>
          <Text style={[typography.heading1, styles.titleText]}>Raise Voice</Text>
          <Image
            source={{ uri: 'https://example.com/your-illustration-url' }}
            style={styles.titleIcon}
            resizeMode="contain"
          />
        </View>

        <Text style={[typography.subtitle]}>Select the way in which you want to raise a voice.</Text>

        <Image
          source={{ uri: 'https://example.com/your-illustration-url' }}
          style={styles.illustration}
          resizeMode="contain"
        />

        <View style={styles.buttonContainer}>
          <Button title="Declare Issue" onPress={handleDeclareIssue} />
          <Button title="Declare Good Things" onPress={handleDeclareGoodThings} />
        </View>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleText: {
    color: '#000',
    marginLeft:45,
  },
  titleIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  subtitle: {
    color: colors.textDim,
    textAlign: 'center',
    marginBottom: 32,
  },
  illustration: {
    width: width * 0.8,
    height: width * 0.6,
    marginBottom: 32,
  },
  buttonContainer: {
    width: '100%',
  },
});

export default RaiseVoiceScreen;