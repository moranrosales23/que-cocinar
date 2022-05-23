import { Button, FormControl, Input, Modal } from 'native-base';
import { useState } from 'react';

const ingredient = ({ showModal, setShowModal, save, initial }) => {
  const [description, setdescription] = useState(initial);

  const handleInputChange = (text) => {
    setdescription({ ...description, descripcion: text });
  };

  const handleButtonPress = () => {
    save(description);
  };

  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Registrar Ingredientes</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Ingrediente:</FormControl.Label>
            <Input onChangeText={handleInputChange} />
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button onPress={handleButtonPress}>Save</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default ingredient;
