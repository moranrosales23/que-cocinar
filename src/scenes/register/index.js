import { Box, Center, ScrollView, useToast, VStack } from 'native-base';
import Logo from '_atoms/logo';
import FrmRegisterUser from '_molecules/forms/register-user';
import { USER } from '_services';
import ErrorAxios from '_utils/error';

const RegisterScreen = ({ navigation }) => {
  const toast = useToast();
  const frm = {
    email: {
      alias: '',
      rules: 'required|email',
    },
    password: {
      alias: 'password',
      rules: 'required|minLength:4|equals',
      comp: 'cpassword',
      alias_comp: 'Confirm Password',
    },
    cpassword: {
      alias: 'Confirm Password',
      rules: 'required|minLength:4',
    },
  };

  const save = async (user) => {
    try {
      const response = await USER.register(user);
      toast.show({ title: response.data.message, placement: 'bottom' });
      navigation.navigate('Initial');
    } catch (error) {
      const err = ErrorAxios(error);
      toast.show({ title: err.error, placement: 'top' });
    }
  };

  return (
    <ScrollView
      _contentContainerStyle={{
        minH: '100%',
      }}
    >
      <Center w="100%" bg="white" height="100%">
        <Box safeArea p="2" w="90%" py="8">
          <Logo height="30%" />
          <VStack space={3} mt="5">
            <FrmRegisterUser action={save} fields={frm} />
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default RegisterScreen;
