import { Box, Button, Flex, Image, ScrollView, useToast } from 'native-base';
import { useState } from 'react';
import bandera from '_assets/images/bandera.png';
import Logo from '_atoms/logo';
import FrmLogin from '_molecules/forms/login';
import ErrorAxios from '_utils/error';
import { USER } from '_services';
import AsyncStorage from '@react-native-async-storage/async-storage';

const InitialScreen = ({ navigation }) => {
  const [frm, setFrm] = useState({ email: '', password: '', success: false });
  const toast = useToast();

  const login = async () => {
    try {
      const user = await USER.login(frm);
      AsyncStorage.setItem('@tk', user.data.data);
      navigation.navigate('Main');
    } catch (error) {
      const err = ErrorAxios(error);
      toast.show({ title: err.message, placement: 'top' });
    }
  };

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
            <FrmLogin setFrm={setFrm} frm={frm} />
          </Box>
        </Box>
        <Box ml="4" mr="4" mb="4">
          <Button size="md" mb="4" bg="#1C3940" onPress={login} disabled={!frm.success}>
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
