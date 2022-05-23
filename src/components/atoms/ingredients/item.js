import { Flex, IconButton, Text } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const item = ({ remove, edit, ingredient, id }) => {
  const handleButtonDeletePress = () => {
    remove(id);
  };

  const handleButtonEditPress = () => {
    edit({ _id: id, description: ingredient });
  };

  return (
    <Flex direction="row" align="center" width="100%" justify="space-between">
      <IconButton
        _icon={{
          as: MaterialIcons,
          name: 'delete',
          color: 'danger.500',
        }}
        onPress={handleButtonDeletePress}
      />

      <Text>{ingredient}</Text>

      <IconButton
        color="gray.200"
        _icon={{
          as: MaterialIcons,
          name: 'edit',
          color: 'blue.500',
        }}
        onPress={handleButtonEditPress}
      />
    </Flex>
  );
};

export default item;
