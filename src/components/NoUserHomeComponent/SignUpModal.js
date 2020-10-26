import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { signUp } from '../../firebase/auth';

const SignUpModal = ({ toggleModal, modal }) => {

    const [name, setName] = useState('');
    const [disableButton, setDisableButton] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        setDisableButton(true);
        if (name.trim().length === 0 || name.trim().length > 25) {
            setError('Please provide a proper name');
            return;
        }
        await signUp(name);
        console.log('done');
        setDisableButton(false);
        toggleModal();
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggleModal} >
                <ModalHeader toggle={toggleModal}>Create Your Own Quiz</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Full Name</Label>
                            <Input type="text" name="email" id="name" placeholder="Tony Stark" onChange={(change) => setName(change.target.value)} />
                        </FormGroup>
                    </Form>
                    {
                        error ?
                            <Alert color="danger">{error}</Alert>
                            :
                            <div></div>
                    }
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" disabled={disableButton} onClick={handleSubmit}>Create</Button>{' '}
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default SignUpModal;