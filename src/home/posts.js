import React from 'react';
import Post from './post';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const renderPost = (post, index, saveComment, getFollowingFollowersNumbers) => {
    return (
        <Grid key={index} item xs> 
            <Box m={5}>
                <Post 
                    post={post} 
                    saveComment={saveComment}
                    getFollowingFollowersNumbers={getFollowingFollowersNumbers}
                />
            </Box>
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