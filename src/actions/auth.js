import { firebase } from '../firebase';

const provider = new firebase.auth.GoogleAuthProvider();

const login = () => {
    let googleUser = firebase.auth().currentUser;
    // if (googleUser) {
    //     return Promise.resolve(googleUser);
    // }
    console.log(googleUser)

    // TODO
    // First when you get user info from google, save in firebase under 'users table'
    // Check for duplicate users
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                googleUser = result.user;
                console.log(googleUser);
                resolve(googleUser);
            })
            .catch(error => reject(error.message))
    });
}

const logout = () => firebase.auth().signOut();

export {
    login,
    logout
}