import {
  Box,
  Button,
  Center,
  FormControl,
  Icon,
  Image,
  Input,
  Pressable,
  ScrollView,
  useToast,
} from 'native-base';
import NOT_IMAGE from '_assets/images/profile.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { USER } from '_services';
import ErrorAxios from '_utils/error';
import { updateProfile } from '../../../store/slices/user';
import * as ImagePicker from 'expo-image-picker';

const FrmProfile = () => {
  const user = useSelector((state) => state.user);
  const [frm, setfrm] = useState({
    name: user.name || '',
    lastname: user.lastname || '',
    nickname: user.nickname || '',
    img: user.img || '',
  });

  const toast = useToast();
  const dispatch = useDispatch();

  const handleInputChange = (key, text) => {
    setfrm({ ...frm, [key]: text });
  };

  const handleButtonEditPress = async () => {
    try {
      const response = await USER.edit(frm);
      dispatch(updateProfile(response.data.data));
      toast.show({ title: response.data.message });
    } catch (error) {
      const err = ErrorAxios(error);
      toast.show({ title: err.error, placement: 'top' });
    }
  };

  const openImagePicker = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        toast.show({ title: 'Permission to access camera roll is required!' });
        return;
      }
      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
      });
      if (!pickerResult.cancelled) {
        const img_user = await USER.setIMG(pickerResult.uri);
        toast.show({ title: img_user.data.message });
        setfrm({ ...frm, img: pickerResult.uri });
      }
    } catch (error) {
      const err = ErrorAxios(error);
      toast.show({ title: err.error, placement: 'top' });
    }
  };

  return (
    <>
      <ScrollView>
        <Box position="relative" mt="4">
          <Center mt="4">
            <Image
              source={frm.img === '' ? NOT_IMAGE : { uri: frm.img }}
              height="40"
              width="40"
              alt="profile"
              borderRadius={100}
            />
          </Center>
          <Pressable
            borderRadius="50"
            width="10"
            height="10"
            bg="gray.800"
            position="absolute"
            left="54%"
            bottom="-30"
            onPress={openImagePicker}
          >
            <Center>
              <Icon as={MaterialIcons} name="add" color="white" size="8" py="1" />
            </Center>
          </Pressable>
        </Box>
        <Box mt="8" ml="2" mr="2">
          <FormControl isRequired>
            <FormControl.Label>Nombres</FormControl.Label>
            <Input value={frm.name} onChangeText={(text) => handleInputChange('name', text)} />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>Apellidos</FormControl.Label>
            <Input
              value={frm.lastname}
              onChangeText={(text) => handleInputChange('lastname', text)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Alias</FormControl.Label>
            <Input
              value={frm.nickname}
              onChangeText={(text) => handleInputChange('nickname', text)}
            />
          </FormControl>
          <Button size="md" mt="6" bg="#1C3940" onPress={handleButtonEditPress}>
            Actualizar
          </Button>
        </Box>
      </ScrollView>
    </>
  );
};

export default FrmProfile;
