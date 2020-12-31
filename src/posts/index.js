import React from 'react';
import Posts from './posts'
import { useQuery, useMutation, useQueryCache} from 'react-query';
import { getPosts, addNewPost } from '../actions'

const PostsContainer = () => {
    const cache = useQueryCache();
    
    const { isLoading, isError, data, error } = useQuery('posts', getPosts)
    // when saving, we have to pass file, caption, user

       // Mutations
    const [savePost] = useMutation(addNewPost, {
        onSuccess: () => {
            // Query Invalidations
            cache.invalidateQueries('posts')
        }
    });

    const handleSavePost = (file, caption, user) => {
        savePost({
            file,
            caption,
            user
        });
    }

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <Posts posts={data} savePost={handleSavePost}/>
    )
}

export default PostsContainer;