import { Box, Button, Flex } from 'native-base';

const LoginScreen = () => {
  return (
    <Flex direction="column" justify="space-around" flexGrow="1">
      <Box mt="5" flexGrow="2" bg="blue.200">
        logosssssssssssssssssaa
      </Box>
      <Box ml="4" mr="4" mb="4">
        <Button size="sm" mb="4">
          Ingresar
        </Button>
        <Button size="sm">Registrate</Button>
      </Box>
    </Flex>
  );
};

export default LoginScreen;
