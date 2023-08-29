import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import { Background } from './src/components/background/background';
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';

export default function App() {

  const [fontsLoaded, error] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <Background>
      <Routes />
      <StatusBar style="light" translucent />
    </Background>
  );
}


