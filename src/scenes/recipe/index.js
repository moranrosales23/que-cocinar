import { Box, Center, Flex, HStack, Icon, Image, ScrollView, Text, VStack } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RecipeScreen = () => {
  return (
    <>
      <ScrollView>
        <Box position="relative" width="100%" display="flex" alignItems="center">
          <Image
            source={{
              uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
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
            The Garden City
          </Text>
        </Box>

        <Box px="2" mt="4">
          <Text fontSize="md" bold mt="4" mb="2">
            Ingredientes:
          </Text>
          <VStack>
            <Flex direction="row" alignItems="center">
              <Icon as={MaterialIcons} name="done" color="green.600"></Icon>
              <Text> Ingrediente 1</Text>
            </Flex>
            <Flex direction="row" alignItems="center">
              <Icon as={MaterialIcons} name="done" color="green.600"></Icon>
              <Text> Ingrediente 2</Text>
            </Flex>
          </VStack>
          <Text fontSize="md" bold mt="4">
            Preparación:
          </Text>
          <Flex direction="row" mt="3">
            <Box width="20%" alignItems="center" justifyContent="center">
              <Box borderRadius="50" bg="danger.500" width="8" height="8" textAlign="center">
                <Text px="3" py="1" color="white">
                  1
                </Text>
              </Box>
            </Box>
            <Text width="80%">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel molestias tenetur eaque
              ipsam delectus dolorem esse a, ab voluptas reprehenderit vitae eos eligendi
              consequatur odit laudantium, quisquam at corrupti earum.
            </Text>
          </Flex>
          <Flex direction="row" mt="3">
            <Box width="20%" alignItems="center" justifyContent="center">
              <Box borderRadius="50" bg="danger.500" width="8" height="8" textAlign="center">
                <Text px="3" py="1" color="white">
                  2
                </Text>
              </Box>
            </Box>
            <Text width="80%">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel molestias tenetur eaque
              ipsam delectus dolorem esse a, ab voluptas reprehenderit vitae eos eligendi
              consequatur odit laudantium, quisquam at corrupti earum.
            </Text>
          </Flex>
        </Box>
      </ScrollView>
    </>
  );
};

export default RecipeScreen;
