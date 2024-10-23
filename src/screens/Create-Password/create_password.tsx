import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Image, Dimensions, TextInput, Text } from 'react-native';
import Button from '../../components/Buttons/button';
import { colors } from '@theme/colors';
import typography from '@theme/styles/typography';
import { spacing } from '@theme/spacing';
import BackButton from '@components/BackButton';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const CreatePassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    if (newPassword === confirmPassword) {
      console.log('Passwords match. Proceeding to reset password...');
    } else {
      console.log('Passwords do not match. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <BackButton />
        <View style={styles.header}>
          {/* Uncomment below line if you are using Ionicons */}
          {/* <Ionicons name="chevron-back" size={24} color={colors.text} /> */}
        </View>

        <Image
          source={{ uri: 'https://example.com/your-illustration-url' }}
          style={styles.illustration}
          resizeMode="contain"
        />

        <View style={styles.content}>
          <View>
            <Text style={[typography.heading1]}>Create new password</Text>
          </View>

          <Text style={[typography.subtitle, styles.subtitle]}>
            Your new password must be unique from those previously used.
          </Text>

          <TextInput
            style={[styles.input, { fontWeight: '500' }]}
            value={newPassword}
            onChangeText={setNewPassword}
            placeholder="New Password"
            placeholderTextColor={colors.textDim}
            textContentType="password"
            secureTextEntry={true}
          />

          <TextInput
            style={[styles.input, { fontWeight: '500' }]}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor={colors.textDim}
            textContentType="password"
            secureTextEntry={true}
          />

          <View style={styles.buttonContainer}>
            <Button title="Reset Password" onPress={handleResetPassword} />
          </View>
        </View>
      </ScrollView>
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
  },
  subtitle: {
    color: colors.textDim,
    marginBottom: 32,
  },
  illustration: {
    width: width * 0.8,
    height: width * 0.6,
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.textDim,
    borderRadius: 8,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginBottom: spacing.md,
    fontSize: 16,
    fontFamily: 'Outfit-Medium',
  },
  buttonContainer: {
    marginTop: 16,
  },
});

export default CreatePassword;
