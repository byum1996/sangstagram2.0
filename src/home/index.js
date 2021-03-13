import React from 'react';
import Posts from './posts'
import { useQuery, useMutation, useQueryCache } from 'react-query';
import { getFollowingPosts } from '../actions';
import { saveComment } from '../actions/posts';

const HomeContainer = ({user}) => {
    const cache = useQueryCache()
    
    const { isLoading, isError, data, error } = useQuery('posts', () => getFollowingPosts(user.displayName))

    const [ mutate ] = useMutation(saveComment, {
        onSuccess: () => {
            cache.invalidateQueries('posts')
        }
    });

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }
    
    return (
        <Posts posts={data} saveComment={(post, comment) => mutate({user, post, comment})}/>
    )
}

export default HomeContainer;