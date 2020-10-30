import firestoreDAL from './firestoreDAL';

const { search, add } = firestoreDAL('users');

const addUser = async (user) => {
    const { email } = user 
    const searchResult = await search('email', '==', email)

    if (searchResult.length === 0) {
        await add(user)
    }
    
    //todo
    //1. destructure useful properties from user object 
    //photoUrl, email, name, etc
    //1.1 search if user already exists (email address)
    //2. save by calling add function from firebaseDAL.js
}

export {
    addUser,
    search
};