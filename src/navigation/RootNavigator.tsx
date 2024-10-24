import { selectAccessToken, selectAuthStatus } from '@features/auth/authSelectors';
import { fetchAccessToken } from '@features/auth/authSlice';
import AuthNavigator from '@navigation/AuthNavigator';
import HomeNavigator from '@navigation/HomeNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(selectAccessToken);
  const authStatus = useAppSelector(selectAuthStatus);

  useEffect(() => {
    // Check if the user is already authenticated
    dispatch(fetchAccessToken);
  }, [dispatch]);

  if (authStatus === 'loading') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {accessToken ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeNavigator} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={AuthNavigator} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;
