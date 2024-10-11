import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OTPVerificationScreen from '@screens/OtpVerification/otpVerification';
import RaiseVoiceScreen from '../screens/Raise-voice/raise-voice';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import * as React from 'react';
import { View } from 'react-native';
import { AuthStackParamList, StackRoutesType } from 'types/navigation';

const ForgotPassword = () => <View />;
const Register = () => <View />;

type AuthStackRoutesType = StackRoutesType<AuthStackParamList>;

const authStackRoutes: AuthStackRoutesType = [
  {
    name: 'Login',
    component: RaiseVoiceScreen,
  },
  // {
  //   name: 'About',
  //   component: AboutScreen,
  // },
  {
    name: 'Register',
    component: Register,
  },
  {
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
];

const Stack = createNativeStackNavigator<AuthStackParamList>();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {authStackRoutes.map((stackRoute) => (
        <Stack.Screen key={stackRoute.name} {...stackRoute} />
      ))}
    </Stack.Navigator>
  );
}

export default AuthNavigator;
