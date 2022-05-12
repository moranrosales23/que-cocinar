import Search from '_molecules/search/search';
import Recipe from '_molecules/recipe/recipe';
import { ScrollView } from 'native-base';

const Recipes = ({ navigation}) => {
  return (
    <>
      <Search />
      <ScrollView>
        <Recipe navigation={navigation}/>
        <Recipe navigation={navigation}/>
      </ScrollView>
    </>
  );
};

export default Recipes;
