import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import illustrations from '../../assets/illustrations'; // Ensure this is correct
import Spacer from '../../components/spacer';
import styles from '../LoginScreen/LoginScreen.styles';

const LoginScreen: React.FC = () => {
  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        bounces={false}
        overScrollMode="never"
      >
        <Spacer size={20} />
        <Text style={styles.title} variant="headlineLarge">
          Welcome back!
        </Text>
        <Spacer size={20} />
        <Image source={illustrations.login} style={styles.logo} />
        <TextInput
          mode="outlined"
          label="Email"
          placeholder="Enter your email"
          onChangeText={setEmailInput}
          value={emailInput}
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <Spacer size={20} />

        <TextInput
          mode="outlined"
          label="Password"
          placeholder="Enter your password"
          onChangeText={setPasswordInput}
          value={passwordInput}
          textContentType="password"
          secureTextEntry={true} // Hide the password input
        />
        <Spacer size={20} />

        <Button mode="contained" style={{ borderRadius: 8 }}>
          Login
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
