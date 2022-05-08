import { Box, Button, Flex, Image, ScrollView } from 'native-base';
import bandera from '_assets/images/bandera.png';
import Logo from '_atoms/logo';
import FrmLogin from '_molecules/forms/login';

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
          <Logo height="44%" />
          <Box ml="4" mr="4" mt="4">
            <FrmLogin />
          </Box>
        </Box>
        <Box ml="4" mr="4" mb="4">
          <Button size="md" mb="4" bg="#1C3940" onPress={() => navigation.navigate('Main')}>
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
