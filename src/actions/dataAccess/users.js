import firestoreDAL from './firestoreDAL';

const { search } = firestoreDAL('users');
const authenticatePromise = (username, password) => {

    const field = 'username';
    const operator = '==';
    const value = username;

    return new Promise((resolve, reject) => {
        search(field, operator, value)
            .then(user => {
                resolve({
                    isAuthenticated: user ? true : false
                })
            })
            .catch(() => {
                reject({
                    isAuthenticated: false
                })
            })
    })
}

const authenticate = async (username, password) => {

    const field = 'username';
    const operator = '==';
    const value = username;

    const [user] = await search(field, operator, value);
    
    console.log('user', user)
    return {
        isAuthenticated: user ? true : false
    }
}

export {
    authenticate
};