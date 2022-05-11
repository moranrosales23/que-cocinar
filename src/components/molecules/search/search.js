import { Center, Heading, Icon, Input, VStack } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const search = () => {
  return (
    <VStack w="100%" marginTop="8" bg="gray.100" p="2" shadow="0">
      <Heading fontSize="lg">¿Qué te provoca?</Heading>
      <Center mt="2">
        <Input
          placeholder="Buscar"
          width="97%"
          borderRadius="10"
          py="1"
          px="2"
          borderWidth="1"
          InputLeftElement={
            <Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />
          }
        />
      </Center>
    </VStack>
  );
};

export default search;
