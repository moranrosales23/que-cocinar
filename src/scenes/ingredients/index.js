import { Box, Divider, Flex, IconButton, Text } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Search from '_molecules/search/search';
import IngredientModal from '_molecules/modal/ingredient';
import { useState } from 'react';

const IngredientsScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const initial = { descripcion: '' };

  const openRegister = () => {
    setShowModal(true);
  };

  const save = (ingredient) => {
    console.log(ingredient);
  };

  return (
    <>
      <Box px="4" position="relative" height="95%">
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
        <IconButton
          size="lg"
          variant="solid"
          _icon={{
            as: MaterialIcons,
            name: 'add',
          }}
          width="15"
          height="15"
          right="10"
          bottom="5"
          px="6"
          py="6"
          borderRadius="50%"
          position="absolute"
          onPress={openRegister}
        />
      </Box>
      <IngredientModal
        showModal={showModal}
        setShowModal={setShowModal}
        save={save}
        initial={initial}
      />
    </>
  );
};

export default IngredientsScreen;
