import React from 'react';
import PostThumbnail from './postThumbnail';
import Grid from '@material-ui/core/Grid';
import AddPost from './addPost';

const renderPost = (post, index, handleDeletePost) => {

    return (
        <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="flex-start"
            key={index}
        > 
            <Grid item xs> 
                <PostThumbnail post={post} handleDeletePost={handleDeletePost} />
            </Grid>     
        </Grid>
    )
}

const Posts = ({posts = [], savePost, user, handleDeletePost}) => {

    const handleOnSubmit = (file, caption) => {
        savePost(file, caption, user)
    }

    return(
        <>
            {posts.map((post, index) => renderPost(post, index, handleDeletePost))}
            <AddPost handleOnSubmit={handleOnSubmit} user={user} />
        </>
    )
}

export default Posts;