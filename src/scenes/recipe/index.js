import { Box, Image, Text } from 'native-base';

const RecipeScreen = () => {
  return (
    <Box position="relative">
      <Image
        source={{
          uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
        }}
        alt="image"
        width="100%"
        height="130"
        mb="2"
      />
      <Text padding="10" bg="danger.500">
        The Garden City
      </Text>
    </Box>
  );
};

export default RecipeScreen;
