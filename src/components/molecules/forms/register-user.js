import { Button, FormControl, Input } from 'native-base';
import { useState } from 'react';

const FrmRegisterUser = ({ action }) => {
  const [frm, setFrm] = useState({ email: '', password: '', cpassword: '' });

  const handleInputChange = (event) => {
    setFrm({
      ...frm,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <FormControl>
        <FormControl.Label>Email</FormControl.Label>
        <Input onChange={handleInputChange} name="email" />
      </FormControl>
      <FormControl>
        <FormControl.Label>Password</FormControl.Label>
        <Input type="password" onChange={handleInputChange} name="password" />
      </FormControl>
      <FormControl>
        <FormControl.Label>Confirm Password</FormControl.Label>
        <Input type="password" onChange={handleInputChange} name="cpassword" />
      </FormControl>
      <Button size="md" mt="6" bg="#1C3940" onPress={action}>
        Registrar
      </Button>
    </>
  );
};

export default FrmRegisterUser;
