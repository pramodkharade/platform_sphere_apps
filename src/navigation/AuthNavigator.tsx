import CustomHeader from '@components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from '@screens/ForgotPasswordScreen';
import LoginScreen from '@screens/LoginScreen/LoginScreen';
import * as React from 'react';
import { View } from 'react-native';
import { AuthStackParamList, StackRoutesType } from 'types/navigation';

const Register = () => <View />;

type AuthStackRoutesType = StackRoutesType<AuthStackParamList>;

const authStackRoutes: AuthStackRoutesType = [
  {
    name: 'Login',
    component: LoginScreen,
  },
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
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: () => <CustomHeader navigation={navigation} />, // Use custom header component
        headerShown: route.name !== 'Login', // Show header only if the screen is not 'Login'
      })}
    >
      {authStackRoutes.map((stackRoute) => (
        <Stack.Screen key={stackRoute.name} {...stackRoute} />
      ))}
    </Stack.Navigator>
  );
}

export default AuthNavigator;
