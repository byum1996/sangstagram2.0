import React from 'react';
import PostThumbnail from './postThumbnail';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import AddPost from './addPost';

const renderPost = (post, index, handleOnDeletePost) => {

    return (
        <PostThumbnail post={post} handleOnDeletePost={handleOnDeletePost} />
    )
}

const Posts = ({posts = [], savePost, user, handleOnDeletePost}) => {

    const handleOnSubmit = (file, caption) => {
        savePost(file, caption, user)
    }

    return(
        <>
            {posts.map((post, index) => renderPost(post, index, handleOnDeletePost))}
            <AddPost handleOnSubmit={handleOnSubmit} user={user} />
        </>
    )
}

export default Posts;