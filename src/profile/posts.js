import React from 'react';
import PostThumbnail from './postThumbnail';
import Grid from '@material-ui/core/Grid';
import AddPost from './addPost/addPost';

const renderPost = (post, index, handleOnDeletePost, saveComment) => {

    return (
            <Grid item xs key={index} > 
                <PostThumbnail post={post} handleOnDeletePost={handleOnDeletePost} saveComment={saveComment} />
            </Grid>
       
    )
}

const Posts = ({ posts = [], savePost, user, handleOnDeletePost, saveComment }) => {

    const handleOnSubmit = (file, caption) => {
        savePost(file, caption, user)
    }

    return(
        <>
            <Grid
                direction='row'
                container spacing={3}
            > 
                {posts.map((post, index) => renderPost(post, index, handleOnDeletePost, saveComment))}
            </Grid>
            <AddPost handleOnSubmit={handleOnSubmit} user={user} />
        </>
    )
}

export default Posts;