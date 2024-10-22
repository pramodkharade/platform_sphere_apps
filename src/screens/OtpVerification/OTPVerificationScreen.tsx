// src/screens/OTPVerificationScreen.tsx

import OTPInput from '@components/OTPInput';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const OTPVerificationScreen: React.FC = () => {
  const [otp, setOtp] = useState<string>('');

  const handleOTPChange = (code: string) => {
    setOtp(code);
  };

  const handleVerify = () => {
    if (otp.length === 4) {
      // Here you would typically send the OTP to your backend for verification
      Alert.alert('Success', `OTP ${otp} has been submitted for verification.`);
    } else {
      Alert.alert('Error', 'Please enter a valid 4-digit OTP.');
    }
  };

  const handleResend = () => {
    // Here you would typically call your API to resend the OTP
    Alert.alert('OTP Resent', 'A new OTP has been sent to your device.');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>Enter the 4-digit code sent to your device</Text>

      <OTPInput length={4} onChange={handleOTPChange} autoFocus />

      <TouchableOpacity
        style={[styles.button, otp.length !== 4 && styles.buttonDisabled]}
        onPress={handleVerify}
        disabled={otp.length !== 4}
      >
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleResend}>
        <Text style={styles.resendText}>Resend OTP</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 30,
  },
  buttonDisabled: {
    backgroundColor: '#A0A0A0',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendText: {
    color: '#007AFF',
    marginTop: 20,
    fontSize: 16,
  },
});

export default OTPVerificationScreen;
