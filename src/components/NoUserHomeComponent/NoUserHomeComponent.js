import React from 'react';
import { Card } from 'reactstrap';
import firebase from '../../firebase/firebase.js';
import CustomNavbar from '../Reuse/CustomNavbar.js';
import HeroComponent from './HeroComponent.js';


const NoUserHomeComponent = () => {
    return (
        <div>
            <CustomNavbar/>
            <HeroComponent/>
        </div>
    );
}

export default NoUserHomeComponent;