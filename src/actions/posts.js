import { firebase } from '../firebase';
import postsDAL from './dataAccess/posts';

const convertComment = (comment) => {
    return {
        ...comment,
        createdAt: comment.createdAt.toDate()
    }
}

const convertComments = (comments) => comments.map(comment => convertComment(comment));

const convertPost = (post) => {
    const { comments, createdAt, ...rest } = post;

    return {
        ...rest,
        comments: comments ? convertComments(comments) : [],
        createdAt: createdAt.toDate()
    }
}

const convertPosts = (posts) => posts.map(post => convertPost(post));

const getAll = () => {
    return new Promise((resolve, reject) => {
        postsDAL.getAll()
            .then(posts => resolve(convertPosts(posts)))
            .catch(reject)
    })
};

const saveComment = async ({user, post, comment}) => {
    const { 
        displayName, 
        photoURL: userAvatar
     } = user;

    const { 
        comments = [], 
        likeClicked,
        ...rest 
    } = post;

    const { text } = comment;

    const convertedComments = comments.map(({ createdAt, ...rest }) => ({
        ...rest,
        createdAt: firebase.firestore.Timestamp.fromDate(createdAt)
    }));

    convertedComments.push({
        createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
        createdBy: displayName,
        userAvatar,
        text
    });

    const updatedPost = {
        ...rest,
        comments: convertedComments
    };

    await postsDAL.update(updatedPost);
}

const removeComment = async ({user, post, comment}) => {
    const { 
        displayName, 
        photoURL: userAvatar
     } = user;

    const { 
        comments = [], 
        likeClicked,
        ...rest 
    } = post;

    const { text } = comment;

    const convertedComments = comments.map(({ createdAt, ...rest }) => ({
        ...rest,
        createdAt: firebase.firestore.Timestamp.fromDate(createdAt)
    }));

    convertedComments.pop({
        createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
        createdBy: displayName,
        userAvatar,
        text
    });

    const updatedPost = {
        ...rest,
        comments: convertedComments
    };

    await postsDAL.update(updatedPost);
}

const increaseLikes = async ({user,post}) => {

    const { 
        comments = [],
        numberOfLikes = [], 
        ...rest 
    } = post;

    const convertedComments = comments.map(({ createdAt, ...rest }) => ({
        ...rest,
        createdAt: firebase.firestore.Timestamp.fromDate(createdAt)
    }));

    numberOfLikes.push(user.displayName)

    const updatedPost = {
        ...rest,
        comments: convertedComments,
        numberOfLikes
    };

    await postsDAL.update(updatedPost)
}

const decreaseLikes = async ({user, post}) => {
    
    const { 
        comments = [],
        numberOfLikes = [], 
        ...rest 
    } = post;

    const convertedComments = comments.map(({ createdAt, ...rest }) => ({
        ...rest,
        createdAt: firebase.firestore.Timestamp.fromDate(createdAt)
    }));

    const filteredResult = numberOfLikes.filter((foo) => foo !== user.displayName)

    const updatedPost = {
        ...rest,
        comments: convertedComments,
        numberOfLikes: filteredResult
    };

    await postsDAL.update(updatedPost)
}

export {
    getAll,
    saveComment,
    increaseLikes,
    decreaseLikes,
    removeComment
}