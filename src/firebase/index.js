import * as firebase from 'firebase';
import config from './config';

const firebaseApp = firebase.initializeApp(config)

export {
    firebaseApp,
    firebase
}
