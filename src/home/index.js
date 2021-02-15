import React from 'react';
import Posts from './posts'
import { useQuery } from 'react-query';
import { getPosts } from '../actions'

const HomeContainer = () => {
    
    const { isLoading, isError, data, error } = useQuery('posts', getPosts)

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <Posts posts={data}/>
    )
}

export default HomeContainer;