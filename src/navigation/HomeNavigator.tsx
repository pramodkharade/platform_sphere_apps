import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import * as React from 'react';
import { View } from 'react-native';
import { HomeStackParamList, StackRoutesType } from 'types/navigation';

const Register = () => <View />;

type HomeStackRoutesType = StackRoutesType<HomeStackParamList>;

const homeStackRoutes: HomeStackRoutesType = [
  {
    name: 'Dashboard',
    component: HomeScreen,
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
      {homeStackRoutes.map((stackRoute) => (
        <Stack.Screen key={stackRoute.name} {...stackRoute} />
      ))}
    </Stack.Navigator>
  );
}

export default HomeNavigator;
