import React from 'react';
import Post from './post';
import Grid from '@material-ui/core/Grid';

const renderPost = (post, index, saveComment, getFollowingFollowersNumbers) => {
    return (
        <Grid key={index} item xs> 
            <Post 
                post={post} 
                saveComment={saveComment}
                getFollowingFollowersNumbers={getFollowingFollowersNumbers}
            />
        </Grid>     
    )
}

const Posts = ({ posts = [], saveComment, getFollowingFollowersNumbers }) => {

    return (
        <Grid
            container spacing={3}
            direction="column"
            justify="space-between"
            alignItems="center"
        > 
            {posts.map((post, index) => renderPost(post, index, saveComment, getFollowingFollowersNumbers))}
        </Grid>
    )
}

export default Posts;