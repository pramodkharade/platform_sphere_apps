import illustrations from '@assets/illustrations';
import PrimaryButton from '@components/PrimaryButton';
import PrimaryTextButton from '@components/PrimaryTextButton';
import Spacer from '@components/spacer';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import typography from '@theme/styles/typography';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthStackParamList } from 'types/navigation';

import styles from '../LoginScreen/LoginScreen.styles';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollViewContent}
        style={styles.scrollView}
        bounces={false}
        overScrollMode="never"
      >
        <Spacer size={60} />
        <Text style={typography.heading1}>Welcome back!</Text>
        <Spacer size={20} />
        <Image source={illustrations.login} style={styles.logo} />
        <TextInput
          mode="outlined"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          textContentType="emailAddress"
          keyboardType="email-address"
          style={{ width: '100%' }}
          contentStyle={typography.body}
        />
        <Spacer size={20} />
        <TextInput
          mode="outlined"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          textContentType="password"
          secureTextEntry={!isPasswordVisible}
          style={{ width: '100%' }}
          contentStyle={typography.body}
          right={
            <TextInput.Icon
              icon={
                isPasswordVisible
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
        <PrimaryTextButton title="Forgot Password?" onPress={() => navigation.navigate('ForgotPassword')} />
        <View style={styles.buttonContainer}>
          <PrimaryButton title="Login" onPress={() => navigation.navigate('Home')} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={typography.body}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={typography.bottomTextButton}>Register Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
