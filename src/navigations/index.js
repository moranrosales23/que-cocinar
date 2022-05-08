import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'native-base';
import { Alert } from 'react-native';
import InitialScreen from '_scenes/initial';
import RegisterScreen from '_scenes/register';

const Stack = createStackNavigator();

const InitialNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Initial">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Initial" component={InitialScreen} />
      </Stack.Group>
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: 'Register',
          headerRight: () => (
            <Button onPress={() => Alert.alert('This is a button!')} title="Info" color="#fff" />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default InitialNavigator;
