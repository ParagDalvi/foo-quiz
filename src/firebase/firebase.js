import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDrzq4GunsAgIbVp_Rni8X31aAqJ63Bk58",
    authDomain: "foo-quiz.firebaseapp.com",
    databaseURL: "https://foo-quiz.firebaseio.com",
    projectId: "foo-quiz",
    storageBucket: "foo-quiz.appspot.com",
    messagingSenderId: "299719561144",
    appId: "1:299719561144:web:131503846863c6d152894d",
    measurementId: "G-B1GPTPVHW7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;