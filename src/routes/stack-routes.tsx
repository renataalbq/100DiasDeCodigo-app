import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TabRoutes } from './tab-routes';

const Stack = createStackNavigator();

export const StackRoutes = () => {
  return (
  <Stack.Navigator initialRouteName='Timeline'
  screenOptions={{
    gestureEnabled: true,
    headerShown: false,
  }}>
    <Stack.Screen name="Timeline" component={TabRoutes} />

  </Stack.Navigator>
  )
}