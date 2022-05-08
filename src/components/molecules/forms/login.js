import { FormControl, Input } from 'native-base';

const FrmLogin = () => {
  return (
    <>
      <FormControl isRequired mb="4">
        <FormControl.Label>Email</FormControl.Label>
        <Input type="email" />
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>Password</FormControl.Label>
        <Input type="password" />
      </FormControl>
    </>
  );
};

export default FrmLogin;
