import { Box, Button, Flex, FormControl, Image, Input, ScrollView } from 'native-base';
import logo from '_assets/images/logo.png';
import bandera from '_assets/images/bandera.png';

const InitialScreen = ({ navigation }) => {
  return (
    <ScrollView
      _contentContainerStyle={{
        minH: '100%',
      }}
    >
      <Flex direction="column" justify="space-around" flexGrow="1" bg="white">
        <Image source={bandera} alt="bandera" resizeMode={'contain'} width="100%" />

        <Box>
          <Image source={logo} height="44%" alt="Logo de la aplicación" resizeMode={'contain'} />
          <Box ml="4" mr="4" mt="4">
            <FormControl isRequired mb="4">
              <FormControl.Label>Email</FormControl.Label>
              <Input type="email" />
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
            </FormControl>
          </Box>
        </Box>
        <Box ml="4" mr="4" mb="4">
          <Button size="md" mb="4" bg="#1C3940">
            Ingresar
          </Button>
          <Button
            size="md"
            borderColor="#1C3940"
            borderWidth={1}
            bg="white"
            _text={{ color: '#1C3940' }}
            onPress={() => navigation.navigate('Register')}
          >
            Registrate
          </Button>
        </Box>
      </Flex>
    </ScrollView>
  );
};

export default InitialScreen;
