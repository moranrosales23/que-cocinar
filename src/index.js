import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet } from 'react-native';
import InitialNavigator from '_navigations';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <InitialNavigator />
      </NavigationContainer>
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
