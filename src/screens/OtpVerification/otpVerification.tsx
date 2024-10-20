import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import BackButton from '../../components/BackButton';

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

        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.subtitle}>Enter the verification code we just sent on your email address.</Text>

        <TextInput
          style={styles.otpInput}
          value={otpCode}
          onChangeText={setOtpCode}
          placeholder="Enter OTP"
          keyboardType="number-pad"
          maxLength={6}
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>

        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn't received code? </Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
    marginTop: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
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
  saveButton: {
    backgroundColor: '#6C63FF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  resendText: {
    color: '#666',
  },
  resendLink: {
    color: '#FFB800',
    fontWeight: '600',
  },
});

export default OTPVerificationScreen;
