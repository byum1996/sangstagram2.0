import React from 'react';
import PostThumbnail from './postThumbnail';
import Grid from '@material-ui/core/Grid';
import AddPost from './addPost/addPost';

const renderPost = (post, index, handleOnDeletePost) => {

    return (
            <Grid item xs key={index} > 
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
                direction='row'
                container spacing={3}
            > 
                {posts.map((post, index) => renderPost(post, index, handleOnDeletePost))}
            </Grid>
            <AddPost handleOnSubmit={handleOnSubmit} user={user} />
        </>
    )
}

export default Posts;