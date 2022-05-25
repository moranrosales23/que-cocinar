import { FormControl, Input, Text } from 'native-base';
import { useState } from 'react';
import { validate } from '_utils/validations';

const FrmLogin = ({ frm, setFrm }) => {
  const fields = {
    email: {
      alias: '',
      rules: 'required|email',
    },
    password: {
      alias: 'password',
      rules: 'required|minLength:4',
    },
  };
  const [error, setError] = useState({});
  const handleInputChange = (key, value) => {
    const data = {
      ...frm,
      [key]: value,
    };
    const err = validate(fields, data);
    data.success = err.success;
    setError(err);
    setFrm(data);
  };

  return (
    <>
      <FormControl isRequired mb="2">
        <FormControl.Label>Email</FormControl.Label>
        <Input
          keyboardType="email-address"
          onChangeText={(text) => handleInputChange('email', text)}
        />
        {error.hasOwnProperty('email') && (
          <Text size="xs" color="amber.500" height="5" width="100%">
            {error.email.message}
          </Text>
        )}
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>Password</FormControl.Label>
        <Input type="password" onChangeText={(text) => handleInputChange('password', text)} />
        {error.hasOwnProperty('password') && (
          <Text size="xs" color="amber.500" height="5" width="100%">
            {error.password.message}
          </Text>
        )}
      </FormControl>
    </>
  );
};

export default FrmLogin;
