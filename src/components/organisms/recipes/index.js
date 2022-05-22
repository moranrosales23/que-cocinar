import Search from '_molecules/search/search';
import Recipe from '_molecules/recipe/recipe';
import { ScrollView, useToast } from 'native-base';
import { useEffect, useState } from 'react';
import ErrorAxios from '_utils/error';
import { RECIPE } from '_services';
import RecipeSkeleton from '_molecules/skeleton/recipe/recipe';

const Recipes = ({ navigation }) => {
  const toast = useToast();
  const [recipe, setRecipe] = useState([]);
  const [loading, setloading] = useState(false);
  const number_skeleton = [1, 2, 3];

  useEffect(async () => {
    try {
      setloading(true);
      const recipes = await RECIPE.all({});
      console.log(recipes.data.data);
      setRecipe(recipes.data.data);
      setloading(false);
    } catch (error) {
      const err = ErrorAxios(error);
      toast.show({ title: err.error, placement: 'top' });
    }
  }, []);

  return (
    <>
      <Search />
      <ScrollView>
        {loading && number_skeleton.map((number) => <RecipeSkeleton key={number} />)}
        {!loading &&
          recipe.map((recip) => (
            <Recipe
              navigation={navigation}
              key={recip._id}
              name={recip.name}
              category={recip.category}
              img={recip.img}
              id={recip._id}
            />
          ))}
      </ScrollView>
    </>
  );
};

export default Recipes;
