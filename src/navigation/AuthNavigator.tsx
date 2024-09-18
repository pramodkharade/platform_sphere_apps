import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { View } from 'react-native';

import LoginScreen from '../screens/LoginScreen/LoginScreen';
import AboutScreen from '../screens/About/About'; // Adjust the import path as necessary
import { AuthStackParamList, StackRoutesType } from '../types/navigation';

const ForgotPassword = () => <View />;
const Register = () => <View />;

type AuthStackRoutesType = StackRoutesType<AuthStackParamList>;

const authStackRoutes: AuthStackRoutesType = [
  {
    name: 'Login',
    component: AboutScreen,
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
