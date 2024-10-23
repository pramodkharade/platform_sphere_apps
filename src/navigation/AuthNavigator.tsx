import CustomHeader from '@components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateProfileScreen from '@screens/CreateProfile/CreateProfileScreen';
import ForgotPassword from '@screens/ForgotPasswordScreen';
import LoginScreen from '@screens/LoginScreen/LoginScreen';
import * as React from 'react';
import { AuthStackParamList, StackRoutesType } from 'types/navigation';

type AuthStackRoutesType = StackRoutesType<AuthStackParamList>;

const authStackRoutes: AuthStackRoutesType = [
  {
    name: 'Login',
    component: LoginScreen,
  },
  {
    name: 'Register',
    component: CreateProfileScreen,
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
