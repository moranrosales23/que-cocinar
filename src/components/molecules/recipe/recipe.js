import { Box, Heading, Icon, Image, Pressable, Text, useToast } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { RECIPE } from '_services';
import ErrorAxios from '_utils/error';
import { setFavorite as setFav } from '../../../store/slices/user';
import { updateFavorite } from '../../../store/slices/recipes';

const recipe = ({ navigation, id, name, category, img, isFavorite, rate }) => {
  const toast = useToast();
  const { recipes } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  const resetFav = (favorites = []) => {
    return recipes.map((recipe) => {
      const nrecip = { ...recipe };
      nrecip.isFavorite = false;
      for (const fav of favorites) {
        if (fav.recipe === nrecip._id) {
          nrecip.isFavorite = true;
          break;
        }
      }
      return nrecip;
    });
  };

  const setFavorite = async () => {
    try {
      let favorite = await RECIPE.setFavorite(id);
      dispatch(setFav(favorite.data.data));
      const resetRecipe = resetFav(favorite.data.data);
      dispatch(updateFavorite(resetRecipe));
    } catch (error) {
      const err = ErrorAxios(error);
      toast.show({ title: err.error, placement: 'top' });
    }
  };

  return (
    <>
      <Pressable
        display="flex"
        borderWidth="1"
        borderColor="gray.200"
        px="2"
        py="2"
        marginTop="3"
        bg="white"
        borderRadius="10"
        ml="2"
        mr="2"
        onPress={() => navigation.navigate('RepiceDTL', { id })}
      >
        <Heading size="sm" mb="2">
          {name}
        </Heading>
        <Box position="relative">
          <Image
            source={{
              uri: img,
            }}
            alt="image"
            width="100%"
            height="130"
            mb="2"
          />
          <Pressable
            width="6"
            position="absolute"
            right="0"
            height="6"
            bg="white"
            onPress={setFavorite}
          >
            <Icon
              as={MaterialIcons}
              name="favorite"
              color={isFavorite ? 'amber.600' : 'gray.500'}
              size={6}
            />
          </Pressable>
        </Box>

        <Box display="flex" flexDirection="row" height="6">
          <Box display="flex" flexDirection="row">
            <Text size="xs" width="7">
              10h
            </Text>
            <Icon as={MaterialIcons} name="schedule" color="green.600" size={6} />
          </Box>
          <Box
            ml="2"
            bg="green.600"
            borderRadius="10"
            width="55"
            display="flex"
            flexDirection="row"
          >
            <Text size="xs" color="white" flex="1" textAlign="center">
              {category}
            </Text>
          </Box>
        </Box>
      </Pressable>
    </>
  );
};

export default recipe;
