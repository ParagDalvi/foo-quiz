import firebase from './firebase.js';


const checkIfDocumentExists = async (collection, doc) => {
    try {
        return (await firebase.firestore().collection(collection).doc(doc).get());
    } catch (error) {
        return 'Error in loading, please try again';
    }
}

const writeNewDoc = async (path, docName, answers, name) => {
    try {
        await firebase.firestore().collection(path).doc(docName).set({
            answers: {
                '1': answers._1,
                '2': answers._2,
                '3': answers._3,
                '4': answers._4,
                '5': answers._5,
                '6': answers._6,
                '7': answers._7,
                '8': answers._8,
                '9': answers._9,
                '10': answers._10,
            },
            name: name,
            friends: {},
        });
        console.log('done');
        return 'done';
    } catch (error) {
        return error;
    }
}

const updateDoc = async (path, docName, value) => {
    try {
        await firebase.firestore().collection(path).doc(docName).update({
            'friends': value,
        });
        console.log('update done');
        return 'done';
    } catch (error) {
        return error;
    }
}

export { writeNewDoc , checkIfDocumentExists, updateDoc };