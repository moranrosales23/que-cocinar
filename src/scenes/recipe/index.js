import { Box, Flex, Icon, Image, ScrollView, Text, useToast, VStack } from 'native-base';
import { useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ErrorAxios from '_utils/error';
import { RECIPE } from '_services';

const RecipeScreen = ({ route }) => {
  const { id } = route.params;
  const [recipe, setRecipe] = useState({});
  const toast = useToast();
  useEffect(async () => {
    try {
      const recipes = await RECIPE.find(id);
      setRecipe(recipes.data.data[0]);
    } catch (error) {
      const err = ErrorAxios(error);
      toast.show({ title: err.error, placement: 'top' });
    }
  }, []);

  return (
    <>
      <ScrollView>
        <Box position="relative" width="100%" display="flex" alignItems="center">
          <Image
            source={{
              uri: recipe.img,
            }}
            alt="image"
            width="100%"
            height="130"
          />
          <Text
            padding="4"
            bg="danger.500"
            position="absolute"
            top="99"
            borderRadius="10"
            color="white"
            maxWidth="240"
            height="auto"
          >
            {recipe.name}
          </Text>
        </Box>

        <Box px="2" mt="4" paddingBottom="120">
          <Text fontSize="md" bold mt="4" mb="2">
            Ingredientes:
          </Text>
          <VStack>
            {recipe.ingredients &&
              recipe.ingredients.map((ingrediente, index) => {
                return (
                  <Flex direction="row" alignItems="center" key={index * 2}>
                    <Icon as={MaterialIcons} name="done" color="green.600" mr="2"></Icon>
                    <Text>
                      {ingrediente.measure} {ingrediente.name}
                    </Text>
                  </Flex>
                );
              })}
          </VStack>
          <Text fontSize="md" bold mt="4">
            Preparación:
          </Text>
          {recipe.instructions &&
            recipe.instructions.split('\n').map((step, index) => {
              return (
                <Flex direction="row" mt="3" key={index * 3}>
                  <Box width="15%" alignItems="center" justifyContent="center">
                    <Box borderRadius="50" bg="danger.500" width="8" height="8" textAlign="center">
                      <Text px="3" py="1" color="white" bold>
                        {index + 1}
                      </Text>
                    </Box>
                  </Box>
                  <Text width="85%" px="4">
                    {step}
                  </Text>
                </Flex>
              );
            })}
        </Box>
      </ScrollView>
    </>
  );
};

export default RecipeScreen;
