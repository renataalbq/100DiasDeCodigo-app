import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold
} from '@expo-google-fonts/dm-sans';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { Routes } from 'routes';
import React from 'react';
import { AuthProvider } from 'context/auth';

export default function App() {
  const [fontsLoaded, error] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold
  });

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <SafeAreaView
          style={{ flex: 1, paddingTop: 30, backgroundColor: '#000' }}
        >
          <Routes />
          <StatusBar style='light' translucent />
        </SafeAreaView>
      </AuthProvider>
    </ThemeProvider>
  );
}
