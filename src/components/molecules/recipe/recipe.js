import { Box, Heading, Icon, Image, Pressable, Text, useToast } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RECIPE } from '_services';
import ErrorAxios from '_utils/error';

const recipe = ({ navigation, id, name, category, img, rate }) => {
  const toast = useToast();
  const setFavorite = async () => {
    try {
      const favorite = await RECIPE.setFavorite(id);
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
            onPress={() => {
              console.log('te bailo sabroso');
            }}
          >
            <Icon as={MaterialIcons} name="favorite" color="gray.500" size={6} />
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
