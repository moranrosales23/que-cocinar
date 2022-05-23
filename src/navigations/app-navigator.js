import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Recipes from '_organisms/recipes';
import Favorites from '_organisms/favorites';
import Profile from '_scenes/profile';
import Ingredients from '_scenes/ingredients';

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="gray"
      barStyle={{ backgroundColor: '#1C3940' }}
    >
      <Tab.Screen
        name="Home"
        component={Recipes}
        options={{
          tabBarLabel: 'Recetas',
          tabBarIcon: ({ color }) => <MaterialIcons name="search" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="favorite"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color }) => <MaterialIcons name="favorite" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="ingredients"
        component={Ingredients}
        options={{
          tabBarLabel: 'Ingredientes',
          tabBarIcon: ({ color }) => <MaterialIcons name="ballot" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => <MaterialIcons name="person" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
