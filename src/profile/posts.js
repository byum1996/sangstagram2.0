import React from 'react';
import PostThumbnail from './postThumbnail';
import Grid from '@material-ui/core/Grid';
import AddPost from './addPost/addPost';

const renderPost = (post, index, handleOnDeletePost) => {

    return (
        <Grid 
            item
            spacing={5} 
            key={index}
        > 
            <PostThumbnail 
                post={post} 
                handleOnDeletePost={handleOnDeletePost} 
            />
        </Grid>
    )
}

const Posts = ({ posts = [], savePost, user, handleOnDeletePost}) => {

    const handleOnSubmit = (file, caption) => {
        savePost(file, caption, user)
    }

    return(
        <>
            <Grid
                container
                direction="row"
                justify="center"
                spacing={10}
            > 
                {posts.map((post, index) => renderPost(post, index, handleOnDeletePost))}
            </Grid>
            <AddPost handleOnSubmit={handleOnSubmit} user={user} />
        </>
    )
}

export default Posts;