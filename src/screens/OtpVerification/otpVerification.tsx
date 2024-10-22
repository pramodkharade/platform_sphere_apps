import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import BackButton from '../../components/BackButton';
import typography from '@theme/styles/typography';
import Button from '../../components/buttons/Button';

const OTPVerificationScreen = ({ navigation }) => {
  const [otpCode, setOtpCode] = useState('');

  const handleResend = () => {
    // Implement resend logic here
    console.log('Resending OTP');
  };

  const handleSave = () => {
    // Implement verification logic here
    console.log('Verifying OTP:', otpCode);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <View style={styles.contentContainer}>
        <View style={styles.illustration}>
          {/* You would typically use an actual image here */}
          <View style={styles.mockForm}>
            <View style={styles.mockAvatar} />
            <View style={styles.mockInputs}>
              <View style={styles.mockInput} />
              <View style={styles.mockInput} />
            </View>
          </View>
          <View style={styles.personIllustration} />
        </View>

        <Text style={typography.heading1}>OTP Verification</Text>
        <Text style={typography.subtitle}>Enter the verification code we just sent on your email address.</Text>

        <TextInput
          style={styles.otpInput}
          value={otpCode}
          onChangeText={setOtpCode}
          placeholder="Enter OTP"
          keyboardType="number-pad"
          maxLength={6}
        />

        <Button title="Save" />

        <View style={styles.resendContainer}>
          <Text style={typography.caption}>Didn't received code? </Text>
          <TouchableOpacity onPress={handleResend}>
            <Text style={styles.resendLink}>Resend</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backButton: {
    padding: 16,
  },
  backButtonText: {
    fontSize: 24,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  illustration: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  mockForm: {
    width: 120,
    height: 160,
    backgroundColor: '#E8E9FF',
    borderRadius: 8,
    padding: 16,
  },
  mockAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#B4B4FF',
  },
  mockInputs: {
    marginTop: 16,
  },
  mockInput: {
    height: 10,
    backgroundColor: '#B4B4FF',
    marginBottom: 8,
    borderRadius: 4,
  },
  personIllustration: {
    position: 'absolute',
    right: '30%',
    bottom: 0,
    width: 60,
    height: 120,
    backgroundColor: '#6C63FF',
    borderRadius: 8,
  },
  otpInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 24,
    color: '#000',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  resendLink: {
    color: '#FFB800',
    fontWeight: '600',
  },
});

export default OTPVerificationScreen;
