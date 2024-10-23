import illustrations from '@assets/illustrations';
import PrimaryButton from '@components/PrimaryButton';
import PrimaryTextButton from '@components/PrimaryTextButton';
import Spacer from '@components/spacer';
import { useNavigation } from '@react-navigation/native';
import typography from '@theme/styles/typography';
import React, { useState } from 'react';
import { Image, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../LoginScreen/LoginScreen.styles';

const LoginScreen: React.FC = () => {
  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const navigation = useNavigation();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollViewContent}
        style={styles.scrollView}
        bounces={false}
        overScrollMode="never"
      >
        <Spacer size={20} />
        <Text style={typography.heading1}>Welcome back!</Text>
        <Spacer size={20} />
        <Image source={illustrations.login} style={styles.logo} />
        <TextInput
          mode="outlined"
          placeholder="Enter your email"
          onChangeText={setEmailInput}
          value={emailInput}
          textContentType="emailAddress"
          keyboardType="email-address"
          style={{ width: '100%' }}
          contentStyle={typography.body}
        />
        <Spacer size={20} />
        <TextInput
          mode="outlined"
          placeholder="Enter your password"
          onChangeText={setPasswordInput}
          value={passwordInput}
          textContentType="password"
          secureTextEntry={!passwordVisible}
          style={{ width: '100%' }}
          contentStyle={typography.body}
          right={
            <TextInput.Icon
              icon={
                passwordVisible
                  ? ({ size, color }) => (
                      <Image
                        source={illustrations.passwordShow}
                        style={{ width: size, height: size, tintColor: color }}
                      />
                    )
                  : ({ size, color }) => (
                      <Image
                        source={illustrations.passwordHide}
                        style={{ width: size, height: size, tintColor: color }}
                      />
                    )
              }
              onPress={togglePasswordVisibility}
            />
          }
        />
        <PrimaryTextButton title="Forgot Password?" onPress={() => {}} />
        <PrimaryButton title="Login" onPress={() => {}} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
