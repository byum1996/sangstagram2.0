import React from 'react';
import PostThumbnail from './postThumbnail';
import Grid from '@material-ui/core/Grid';
import AddPost from './addPost';

const renderPost = (post, index) => {
    return (
        <Grid
            key={index}
        > 
            <Grid item xs> 
                <PostThumbnail post={post} />
            </Grid>     
        </Grid>
    )
}

const Posts = ({posts = [], savePost, user}) => {

    const handleOnSubmit = (file, caption) => {
        savePost(file, caption, user)
    }

    return(
        <>
            {posts.map((post, index) => renderPost(post, index))}
            <AddPost handleOnSubmit={handleOnSubmit} user={user} />
        </>
    )
}

export default Posts;