import { createStackNavigator } from '@react-navigation/stack';
import InitialScreen from '_scenes/initial';
import RegisterScreen from '_scenes/register';
import MainScreen from '_scenes/main';
import RecipeScreen from '_scenes/recipe';

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
          title: 'Registro de usuario',
        }}
      />
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Group>
      <Stack.Screen name="RepiceDTL" component={RecipeScreen} />
    </Stack.Navigator>
  );
};

export default InitialNavigator;
