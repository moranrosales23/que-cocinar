import Search from '_molecules/search/search';
import Recipe from '_molecules/recipe/recipe';
import { ScrollView, useToast } from 'native-base';
import { useEffect, useState } from 'react';
import ErrorAxios from '_utils/error';
import { RECIPE } from '_services';
import RecipeSkeleton from '_molecules/skeleton/recipe/recipe';
import { useDispatch, useSelector } from 'react-redux';
import { loadRecipes } from '../../../store/slices/recipes';

const Recipes = ({ navigation }) => {
  const toast = useToast();
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const number_skeleton = [1, 2, 3];
  const { favorites } = useSelector((state) => state.user);
  const { recipes } = useSelector((state) => state.recipes);

  const setFavorites = (recipes = []) => {
    return recipes.map((recipe) => {
      recipe.isFavorite = false;
      for (const fav of favorites) {
        if (fav.recipe === recipe._id) {
          recipe.isFavorite = true;
          break;
        }
      }
      return recipe;
    });
  };

  useEffect(async () => {
    try {
      setloading(true);
      let recipes = await RECIPE.all({});
      recipes = setFavorites(recipes.data.data);
      dispatch(loadRecipes(recipes));
      setloading(false);
    } catch (error) {
      const err = ErrorAxios(error);
      toast.show({ title: err.error, placement: 'top' });
    }
    return () => {
      setloading(false);
    };
  }, [dispatch]);

  return (
    <>
      <Search />
      <ScrollView>
        {loading && number_skeleton.map((number) => <RecipeSkeleton key={number} />)}
        {!loading &&
          recipes.map((recip, index) => (
            <Recipe
              navigation={navigation}
              key={index * 3}
              name={recip.name}
              category={recip.category}
              img={recip.img}
              id={recip._id}
              isFavorite={recip.isFavorite}
            />
          ))}
      </ScrollView>
    </>
  );
};

export default Recipes;
