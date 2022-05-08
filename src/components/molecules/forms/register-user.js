import { Button, FormControl, Input } from 'native-base';

const FrmRegisterUser = ({ navigation }) => {
  return (
    <>
      <FormControl>
        <FormControl.Label>Email</FormControl.Label>
        <Input />
      </FormControl>
      <FormControl>
        <FormControl.Label>Password</FormControl.Label>
        <Input type="password" />
      </FormControl>
      <FormControl>
        <FormControl.Label>Confirm Password</FormControl.Label>
        <Input type="password" />
      </FormControl>
      <Button size="md" mt="6" bg="#1C3940" onPress={() => navigation.navigate('Initial')}>
        Registrar
      </Button>
    </>
  );
};

export default FrmRegisterUser;
