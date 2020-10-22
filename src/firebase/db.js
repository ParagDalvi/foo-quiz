import firebase from './firebase.js';


const checkIfDocumentExists = async (collection, doc) => {
    try {
        return (await firebase.firestore().collection(collection).doc(doc).get());
    } catch (error) {
        return 'Error in loading, please try again';
    }
}

const submitQuiz = async (path, docName, value) => {
    try {
        await firebase.firestore().collection(path).doc(docName).set({
            answers: {
                '1': value._1,
                '2': value._2,
                '3': value._3,
                '4': value._4,
                '5': value._5,
                '6': value._6,
                '7': value._7,
                '8': value._8,
                '9': value._9,
                '10': value._10,
            },
        });
        console.log('done');
        return 'done';
    } catch (error) {
        return error;
    }
}

export { submitQuiz, checkIfDocumentExists };