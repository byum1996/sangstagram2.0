import React from 'react';
import Posts from './posts'
import { useQuery, useMutation, useQueryCache } from 'react-query';
import { getFollowing, getFollowers } from '../actions/dataAccess/following';
import { getFollowingPosts } from '../actions';
import { saveComment, increaseLikes, decreaseLikes } from '../actions/posts';

const HomeContainer = ({user}) => {
    const cache = useQueryCache()
    
    const { isLoading, data } = useQuery('posts', () => getFollowingPosts(user.displayName))

    const [ mutate ] = useMutation(saveComment, {
        onSuccess: () => {
            cache.invalidateQueries('posts')
        }
    });

    const [addUserLike] = useMutation(increaseLikes, {
        onSuccess: () => {
            cache.invalidateQueries('posts')
        }
    });
    
    const [removeUserLike] = useMutation(decreaseLikes, {
        onSuccess: () => {
            cache.invalidateQueries('posts')
        }
    });

    const getFollowingFollowersNumbers = async (displayName) => {
        const followers = await getFollowers(displayName)
        const following = await getFollowing(displayName)

        return {
            followersNumber: followers.length,
            followingNumber: following.length
        }
    } 

    if (isLoading) {
        return <span>Loading...</span>
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

    return (
        <Posts 
            posts={posts} 
            saveComment={(post, comment) => mutate({user, post, comment})}
            getFollowingFollowersNumbers={getFollowingFollowersNumbers}
        />
    )
}

export default HomeContainer;
