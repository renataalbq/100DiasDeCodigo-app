import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TabRoutes } from './tab-routes';
import { SignIn } from 'screens/sign-in/sign-in';

const Stack = createStackNavigator();

export const StackRoutes = () => {
  return (
  <Stack.Navigator initialRouteName='SignIn'
  screenOptions={{
    gestureEnabled: true,
    headerShown: false,
  }}>
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="Timeline" component={TabRoutes} />


  </Stack.Navigator>
  )
}