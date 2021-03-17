import React from 'react';
import Posts from './posts'
import { useQuery, useMutation, useQueryCache } from 'react-query';
import { getFollowingPosts } from '../actions';
import { saveComment, increaseLikes, decreaseLikes } from '../actions/posts';

const HomeContainer = ({user}) => {
    const cache = useQueryCache()
    
    const { isLoading, isError, data, error } = useQuery('posts', () => getFollowingPosts(user.displayName))

    const [ mutate ] = useMutation(saveComment, {
        onSuccess: () => {
            cache.invalidateQueries('posts')
        }
    });

    const [addUserLike] = useMutation(increaseLikes, {
        onSuccess: () => {
            // Query Invalidations
            cache.invalidateQueries('posts')
        }
    });
    
    const [removeUserLike] = useMutation(decreaseLikes, {
        onSuccess: () => {
            // Query Invalidations
            cache.invalidateQueries('posts')
        }
    });

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    const posts = data.map((post) => {
        const { numberOfLikes = [] } = post;
        
        const likedAlready = numberOfLikes.includes(user.displayName);

        const likeClicked = () => likedAlready ? removeUserLike({user, post}) : addUserLike({user, post});
        
        // {
        //     if (likedAlready) {
        //         removeUserLike({
        //             user,
        //             post
        //         })
        //     } else {
        //         addUserLike({
        //             user,
        //             post
        //         })
        //     }
        // }

        return {
            ...post,
            likedAlready,
            likeClicked
        }
    });

    console.log('posts', posts);

    return (
        <Posts 
            posts={posts} 
            saveComment={(post, comment) => mutate({user, post, comment})}
        />
    )
}

export default HomeContainer;