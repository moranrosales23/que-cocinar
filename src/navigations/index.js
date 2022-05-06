import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '_scenes/login';

const Stack = createStackNavigator();

const InitialNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Initial"
      screenOptions={{ headerMode: 'none', header: null }}
    >
      <Stack.Screen name="Initial" component={LoginScreen} options={{ title: 'Login' }} />
    </Stack.Navigator>
  );
};

export default InitialNavigator;
