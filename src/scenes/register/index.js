import { Box, Center, ScrollView, VStack } from 'native-base';
import Logo from '_atoms/logo';
import FrmRegisterUser from '_molecules/forms/register-user';
import { USER } from '_services/index';

const RegisterScreen = ({ navigation }) => {
  const save = (user) => {
    USER.register(user).then((e) => console.log(e));
  };

  console.log(USER);

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
            <FrmRegisterUser action={save} />
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default RegisterScreen;
