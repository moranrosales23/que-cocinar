import {
  Box,
  Button,
  Center,
  FormControl,
  Icon,
  Image,
  Input,
  Pressable,
  ScrollView,
} from 'native-base';
import NOT_IMAGE from '_assets/images/profile.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FrmProfile = () => {
  return (
    <>
      <ScrollView>
        <Box position="relative">
          <Image source={NOT_IMAGE} height="40" alt="profile" resizeMode={'contain'} />
          <Pressable
            borderRadius="50"
            width="10"
            height="10"
            bg="gray.800"
            position="absolute"
            left="54%"
            bottom="-30"
          >
            <Center>
              <Icon as={MaterialIcons} name="add" color="white" size="8" py="1" />
            </Center>
          </Pressable>
        </Box>
        <Box mt="8" ml="2" mr="2">
          <FormControl>
            <FormControl.Label>Nombres</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Apellidos</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Alias</FormControl.Label>
            <Input />
          </FormControl>
          <Button size="md" mt="6" bg="#1C3940" onPress={() => navigation.navigate('Initial')}>
            Actualizar
          </Button>
        </Box>
      </ScrollView>
    </>
  );
};

export default FrmProfile;
