import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
} from 'native-base';
import RecipeSkeleton from '_molecules/skeleton/recipe/recipe';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const recipe = ({ navigation }) => {
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
        onPress={() => {
          console.log('entro');

          navigation.navigate('RepiceDTL');
        }}
      >
        <Heading size="sm" mb="2">
          The Garden City
        </Heading>
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
          <Button width="10" bg="transparent" position="absolute" right="0" height="10">
            <Icon as={MaterialIcons} name="favorite" color="gray.300" size={6} />
          </Button>
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
              Easy
            </Text>
          </Box>
        </Box>
      </Pressable>
      <RecipeSkeleton />
      {/*<Box alignItems="center">
        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
          <Box>
            <Heading size="md" ml="-1">
              The Garden City
            </Heading>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                }}
                alt="image"
              />
            </AspectRatio>
            <Center
              bg="violet.500"
              _text={{
                color: 'warmGray.50',
                fontWeight: '700',
                fontSize: 'xs',
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5"
            >
              PHOTOS
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                The Garden City
              </Heading>
              <Text fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
                The Silicon Valley of India.
              </Text>
            </Stack>
            <Text fontWeight="400">
              Bengaluru (also called Bangalore) is the center of India's high-tech industry. The
              city is also known for its parks and nightlife.
            </Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                  fontWeight="400"
                >
                  6 mins ago
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
                </Box>*/}
    </>
  );
};

export default recipe;
