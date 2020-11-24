import firestoreDAL from './firestoreDAL';

const { search, add } = firestoreDAL('users');

const searchUser = async (name) => {
    const searchResult = await search('displayName', '==', name)
    return searchResult
}

const addUser = async (user) => {

    //todo
    //1. destructure useful properties from user object
    //photoUrl, email, name, etc
    //1.1 search if user already exists (email address)
    //2. save by calling add function from firebaseDAL.js
    const { email } = user
    const searchResult = await search('email', '==', email)

    if (searchResult.length === 0) {
        try {
            await add(user)
        } catch (error) {
            console.log('failed to add user', error);
            throw error;
        }
    }
}

export {
    addUser,
    search,
    searchUser
};
