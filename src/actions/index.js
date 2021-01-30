import {firebase} from '../firebase';
import todos from './todos';
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

const getPosts = async () => {

    const posts = await postsDAL.getAll();

    // array.map() receives a function
    // this function receives one parameter, must return something else

    return posts.map((post) => {
        const { createdAt, ...rest } = post;
        return {
            ...rest,
            createdAt: createdAt.toDate()
        }
    })
}

export {
    todos,
    addNewPost,
    getPosts
}