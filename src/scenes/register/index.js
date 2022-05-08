import { Box, Center, ScrollView, VStack } from 'native-base';
import Logo from '_atoms/logo';
import FrmRegisterUser from '_molecules/forms/register-user';

const RegisterScreen = ({ navigation }) => {
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
            <FrmRegisterUser navigation={navigation} />
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default RegisterScreen;
