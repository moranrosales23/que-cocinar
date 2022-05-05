import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet } from 'react-native';
import LoginScreen from '_scenes/login';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <LoginScreen/>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
