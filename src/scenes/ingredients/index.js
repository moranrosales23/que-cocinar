import { Box, Divider, Flex, IconButton, Pressable, Text } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Search from '_molecules/search/search';

const IngredientsScreen = () => {
  return (
    <Box px="4">
      <Search />

      <Flex direction="row" align="center" width="100%" justify="space-between">
        <IconButton
          _icon={{
            as: MaterialIcons,
            name: 'delete',
            color: 'danger.500',
          }}
        />

        <Text>Cebolla</Text>

        <IconButton
          color="gray.200"
          _icon={{
            as: MaterialIcons,
            name: 'edit',
            color: 'blue.500',
          }}
        />
      </Flex>
      <Divider />
      <Flex direction="row" align="center" width="100%" justify="space-between">
        <IconButton
          _icon={{
            as: MaterialIcons,
            name: 'delete',
            color: 'danger.500',
          }}
        />

        <Text>Cebolla</Text>

        <IconButton
          color="gray.200"
          _icon={{
            as: MaterialIcons,
            name: 'edit',
            color: 'blue.500',
          }}
        />
      </Flex>
    </Box>
  );
};

export default IngredientsScreen;
