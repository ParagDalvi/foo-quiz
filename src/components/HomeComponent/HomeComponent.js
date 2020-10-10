import React from 'react';
import firebase from '../../firebase/firebase.js';


const NoUserHomeComponent = () => {


    const handleLogout = () => {
        firebase.auth().signOut();
        console.log('lo');
    }

    return (
        <div>
            <button onClick={handleLogout}>logout</button>
        </div>
    );
}

export default NoUserHomeComponent;