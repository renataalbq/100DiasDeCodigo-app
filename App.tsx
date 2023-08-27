import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  return (
    <View style={styles.container}>
      <Routes />
      <StatusBar style="light" translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f16',
    paddingTop: 40
  },
});
