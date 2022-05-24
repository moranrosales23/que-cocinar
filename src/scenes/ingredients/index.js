import { Box, Divider, Heading, IconButton, useToast } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IngredientModal from '_molecules/modal/ingredient';
import { useState } from 'react';
import { INGREDIENTS } from '_services';
import ErrorAxios from '_utils/error';
import { useDispatch, useSelector } from 'react-redux';
import { setIngredient } from '../../store/slices/user';
import Item from '_atoms/ingredients/item';

const IngredientsScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [initial, setInitial] = useState({ description: '' });
  const dispatch = useDispatch();
  const toast = useToast();
  const { ingredients } = useSelector((state) => state.user);

  const openRegister = () => {
    setShowModal(true);
  };

  const action = async (ingredient, name) => {
    try {
      if (!['add', 'remove', 'update'].includes(name)) return;
      const ingredients = await INGREDIENTS[name](ingredient);
      dispatch(setIngredient(ingredients.data.data));
      toast.show({ title: ingredients.data.message });
    } catch (error) {
      const err = ErrorAxios(error);
      toast.show({ title: err.error, placement: 'top' });
    }
  };

  const save = async (ingredient, isEdit) => {
    isEdit ? action(ingredient, 'update') : action(ingredient, 'add');
    setShowModal(false);
    setInitial({ description: '' });
  };

  const remove = (id) => {
    action(id, 'remove');
  };

  const edit = (data) => {
    setInitial(data);
    setShowModal(true);
  };

  return (
    <>
      <Box px="4" position="relative" height="95%">
        <Heading
          size="md"
          mt="4"
          mb="4"
          bg="white"
          py="4"
          shadow="1"
          borderBottomColor="gray.400"
          px="4"
        >
          Mis Ingredientes
        </Heading>
        {ingredients.map((ingredient) => (
          <Box key={ingredient._id}>
            <Item
              remove={remove}
              edit={edit}
              ingredient={ingredient.description}
              id={ingredient._id}
            />
            <Divider />
          </Box>
        ))}

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
      {showModal && (
        <IngredientModal
          showModal={showModal}
          setShowModal={setShowModal}
          save={save}
          initial={initial}
        />
      )}
    </>
  );
};

export default IngredientsScreen;
