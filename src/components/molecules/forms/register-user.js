import { Button, FormControl, Input, Text } from 'native-base';
import React, { useState } from 'react';
import { validate } from '_utils/validations';

const FrmRegisterUser = ({ action, fields }) => {
  const [frm, setFrm] = useState({ email: '', password: '', cpassword: '' });
  const [error, setError] = useState({});
  const handleInputChange = (key, value) => {
    const data = {
      ...frm,
      [key]: value,
    };
    setFrm(data);
    const err = validate(fields, data);
    setError(err);
  };

  const handleButtonClick = () => {
    if (error.success) action(frm);
  };
  return (
    <>
      <FormControl isRequired>
        <FormControl.Label>Email</FormControl.Label>
        <Input
          keyboardType="email-address"
          onChangeText={(text) => handleInputChange('email', text)}
        />
        {error.hasOwnProperty('email') && (
          <Text size="xs" color="amber.500" height="12" width="100%">
            {error.email.message}
          </Text>
        )}
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>Password</FormControl.Label>
        <Input type="password" onChangeText={(text) => handleInputChange('password', text)} />
        {error.hasOwnProperty('password') && (
          <Text size="xs" color="amber.500" height="12" width="100%">
            {error.password.message}
          </Text>
        )}
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>Confirm Password</FormControl.Label>
        <Input type="password" onChangeText={(text) => handleInputChange('cpassword', text)} />
        {error.hasOwnProperty('cpassword') && (
          <Text size="xs" color="amber.500" height="12" width="100%">
            {error.cpassword.message}
          </Text>
        )}
      </FormControl>
      <Button size="md" mt="6" bg="#1C3940" onPress={handleButtonClick} disabled={!error.succes}>
        Registrar
      </Button>
    </>
  );
};

export default FrmRegisterUser;
