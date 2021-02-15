import React from 'react';
import Post from './post';
import Grid from '@material-ui/core/Grid';

const renderPost = (post, index) => {
    return (
        <Grid
            key={index}
            container spacing={3}
            direction="column"
            justify="space-between"
            alignItems="center"> 
            <Grid item xs={12} > 
                <Post post={post}/>
            </Grid>     
        </Grid>
    )
}

const Posts = ({ posts = [] }) => {

    return (
        <>
            {posts.map((post, index) => renderPost(post, index))}
        </>
    )
}

export default Posts;