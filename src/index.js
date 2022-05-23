import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import InitialNavigator from '_navigations';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <StatusBar style="auto" />
        <NavigationContainer>
          <InitialNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
