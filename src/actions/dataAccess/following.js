import { useRef } from 'react';
import firestoreDAL from './firestoreDAL';

const { search, add, remove } = firestoreDAL('following');

// following collection will have documents
// each document with have two fields: user, following

// {
//    user: 'Brandon',
//    following: 'Sang'
// }
// {
//    user: 'Brandon',
//    following: 'Mike'
// }
// {
//    user: 'Jack',
//    following: 'Justing'
// }
// {
//    user: 'Sang',
//    following: 'Brandon'
// }

const followUser = async ({ user, following }) => {
    const {
        displayName,
        email,
        photoURL,
    } = user
    await add({
        user: {
            displayName,
            email,
            photoURL
        },
        following
    });
}

const unfollowUser = async (id) => {
    console.log('unfollow user', id)
    await remove(id);
}

const getFollowing = async (displayName) => {
    return await search('user.displayName', '==', displayName)
}

const getFollowers = async (displayName) => {
    return await search('following.displayName', '==', displayName)
}
 
export {
    followUser, 
    unfollowUser,
    getFollowers,
    getFollowing
};