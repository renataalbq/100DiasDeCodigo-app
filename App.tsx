import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold
} from '@expo-google-fonts/dm-sans';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { Routes } from 'routes';

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
      <View style={{ flex: 1, paddingTop: 30, backgroundColor: '#000' }}>
        <Routes />
        <StatusBar style='light' translucent />
      </View>
    </ThemeProvider>
  );
}
