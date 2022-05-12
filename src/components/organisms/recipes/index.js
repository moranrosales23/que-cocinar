import Search from '_molecules/search/search';
import Recipe from '_molecules/recipe/recipe';
import { ScrollView } from 'native-base';

const Recipes = () => {
  return (
    <>
      <Search />
      <ScrollView>
        <Recipe />
        <Recipe />
      </ScrollView>
    </>
  );
};

export default Recipes;
