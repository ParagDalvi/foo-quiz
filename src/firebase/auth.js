import firebase from './firebase';

const signUp = (name) => {
    firebase.auth().signInAnonymously().then(() => {

        firebase.auth().currentUser.updateProfile({
            displayName: name,
        });
    });
}

export { signUp };