import React from 'react';
import Post from './post';
import Grid from '@material-ui/core/Grid';

const renderPost = (post, index, saveComment ) => {
    return (
        <Grid key={index} item xs> 
            <Post post={post} saveComment={saveComment}/>
        </Grid>     
    )
}

const Posts = ({ posts = [], saveComment }) => {

    return (
        <Grid
            container spacing={3}
            direction="column"
            justify="space-between"
            alignItems="center"
        > 
            {posts.map((post, index) => renderPost(post, index, saveComment))}
        </Grid>
    )
}

export default Posts;