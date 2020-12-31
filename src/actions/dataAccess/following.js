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
    console.log('followUser', { user, following })
    await add({
        user,
        following
    });
}

const unfollowUser = async (id) => {
    await remove({
       id
    });
}

const getFollowing = async (user) => {
    return await search('user.displayName', '==', user)
}

const getFollowers = async (user) => {
    return await search('following', '==', user)
}

export {
    followUser,
    unfollowUser,
    getFollowers,
    getFollowing
};