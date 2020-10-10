import React, { useState } from 'react';
import { Card } from 'reactstrap';
import firebase from '../../firebase/firebase.js';
import CustomNavbar from '../Reuse/CustomNavbar.js';
import HeroComponent from './HeroComponent.js';
import SignUpModal from './SignUpModal';


const NoUserHomeComponent = () => {

    const [isModalOpen, setModal] = useState(false);

    const toggleModal = () => setModal(!isModalOpen);

    return (
        <div>
            <CustomNavbar toggleModal={toggleModal} />
            <HeroComponent toggleModal={toggleModal} />
            <SignUpModal toggleModal={toggleModal} modal={isModalOpen} />
        </div>
    );
}

export default NoUserHomeComponent;