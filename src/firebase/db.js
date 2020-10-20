import firebase from './firebase.js';

const submitQuiz = (path, docName, value) => {
    firebase.firestore().collection(path).doc(docName).set({
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
    }).then((a) => console.log('done'));


}

export { submitQuiz };