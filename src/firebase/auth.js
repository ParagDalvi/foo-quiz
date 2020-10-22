import firebase from './firebase';

const signUp = async (name) => {
    await firebase.auth().signInAnonymously();

    await firebase.auth().currentUser.updateProfile({
        displayName: name,
    });
}

export { signUp };