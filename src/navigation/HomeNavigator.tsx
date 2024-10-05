import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/LoginScreen/LoginScreen';
import * as React from 'react';
import { View } from 'react-native';
import { HomeStackParamList, StackRoutesType } from 'types/navigation';

const Register = () => <View />;

type HomeStackRoutesType = StackRoutesType<HomeStackParamList>;

const authStackRoutes: HomeStackRoutesType = [
  {
    name: 'Home',
    component: LoginScreen,
  },
  {
    name: 'Settings',
    component: Register,
  },
];

const Stack = createNativeStackNavigator<HomeStackParamList>();

function HomeNavigator() {
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

export default HomeNavigator;
