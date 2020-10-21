import React, {useState} from 'react';
import Post from './post';
import NewPostFab from './newPostFab';
import NewPost from './newPost';
import Grid from '@material-ui/core/Grid';

const currentUser = 'byum1998';

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

const Posts = ({ posts = [], savePost }) => {
    const [showFormState, setShowFormState] = useState(false);

    const handleOnClick = () => {
        setShowFormState(true)
    }
    const handleOnCancel = () => {
        setShowFormState(false)
    }
    const handleOnSubmit = (file, caption) => {
        setShowFormState(false);
        savePost(file, caption, currentUser)
    }

    return (
        <>
            {
                showFormState && <NewPost handleOnCancel={handleOnCancel} handleOnSubmit={handleOnSubmit}/>
            }
            {posts.map((post, index) => renderPost(post, index))}
            <NewPostFab handleOnClick={handleOnClick}/>
        </>
    )
}

export default Posts;