import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { signUp } from '../../firebase/auth';

const SignUpModal = ({ toggleModal, modal }) => {

    const [name, setName] = useState('');

    const handleSubmit = () => {
        if (!(name.length === 0 || name.length > 25))
            signUp(name);
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
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default SignUpModal;