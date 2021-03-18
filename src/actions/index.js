import {firebase} from '../firebase';
import todos from './todos';
import { getFollowing } from './dataAccess/following';
import {uploadFile} from './storage';
import postsDAL from './dataAccess/posts';

const addNewPost = async ({file, caption, user}) => {
    const { displayName, photoURL } = user;
    // TODO
    // 1. Save it in the firebase storage and get url
    const { url } = await uploadFile(file);
    // 2. Save the user, caption, url in the posts collection
    return await postsDAL.add({
        photoUrl: url,
        caption,
        createdBy: displayName,
        createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
        userAvatar: photoURL
    });
}

const getPosts = async (user) => {
    const field = "createdBy";
    const operator = "==";
    const value = user.displayName

    const posts = await postsDAL.search(field, operator, value);

    // array.map() receives a function
    // this function receives one parameter, must return something else

    return posts.map((post) => {
        const { createdAt, comments = [], ...rest } = post;

        return {
            ...rest,
            comments: comments.map((comment) => {
                const {
                    createdAt,
                    ...commentRest
                } = comment;

                return {
                    createdAt: createdAt.toDate(),
                    ...commentRest
                }
            }),
            createdAt: createdAt.toDate()
        }
    })
}

const getFollowingPosts = async (currentUser) => { 

    // 1. identify current user - already done
    // 2. find all following users
    const followingUsers =  await getFollowing(currentUser)
    // 3. find all posts for following users
    let followingPosts = [];
    for (let i = 0; i < followingUsers.length; i++) {
        const followingUser = followingUsers[i];
        const posts = await getPosts(followingUser.following);
        followingPosts = followingPosts.concat(posts);
    }
    return followingPosts;
}

const removePost = (id) => postsDAL.remove(id);

export {
    todos,
    addNewPost,
    getPosts,
    getFollowingPosts,
    removePost
}