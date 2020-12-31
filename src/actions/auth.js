import { firebase } from '../firebase';
import { addUser } from './dataAccess/users';

const provider = new firebase.auth.GoogleAuthProvider();

const login = () => {
    let currentUser = firebase.auth().currentUser;
    if (currentUser) {
        return currentUser;
    }

    // TODO
    // First when you get user info from google, save in firebase under 'users table'
    // Check for duplicate users
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithPopup(provider)
            .then((response) => {
                const { user } = response;
                console.log('got the user', user);
                const { displayName, email, photoURL } = user

                addUser({ displayName, email, photoURL })
                    .then(() => {
                        console.log('added user!')
                        resolve(user)
                    })
                    .catch((error) => reject(error))
                resolve(user);
            })
            .catch(error => reject(error))
    });
}

const logout = () => firebase.auth().signOut();

export {
    login,
    logout
}
