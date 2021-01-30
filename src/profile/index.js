import React from 'react';
import { useQuery, useMutation, useQueryCache } from 'react-query';
import { getFollowing, getFollowers } from '../actions/dataAccess/following';
import { getPosts, addNewPost } from '../actions'
import ProfileUser from './profileUser';
import FollowingCount from './followingCount';
import FollowersCount from './followersCount';
import Posts from './posts';
import Box from '@material-ui/core/Box';

const ProfileContainer = ({ user }) => {
    const cache = useQueryCache();

    const { isLoading, isError, data, error } = useQuery('following', () => getFollowing(user.displayName))

    const { 
        isLoading: isFollowersLoading, 
        isError: isFollowersError, 
        data: followers, 
        error: followersError 
    } = useQuery('followers', () => getFollowers(user.displayName))

    const { 
        isLoading: isPostsLoading, 
        isError: isPostsError, 
        data: posts, 
        error: postsError 
    } = useQuery('posts', getPosts)

    const [savePost] = useMutation(addNewPost, {
        onSuccess: () => {
            // Query Invalidations
            cache.invalidateQueries('posts')
            console.log('SavePost successful')
            // console.log([savePost], 'savePost')
        }
    });

    const handleSavePost = (file, caption, user) => {
        // console.log('file caption user', {
        //     file,
        //     caption,
        //     user
        // })
        savePost({
            file,
            caption,
            user
        });
    }

    if (isPostsLoading) {
        return <span>Loading...</span>
    }

    if (isPostsError) {
        return <span>Error: {postsError.message}</span>
    }

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    if (isFollowersLoading) {
        return <span>Loading...</span>
    }

    if (isFollowersError) {
        return <span>Error: {followersError.message}</span>
    }

    const followersNumber = followers.length

    const followingNumber = data.length

    return (
        <>
            <Box display='flex' flexDirection='row'>
                <ProfileUser user={user} />
                <FollowingCount followingNumber={followingNumber} />
                <FollowersCount followersNumber={followersNumber} />
            </Box>
            <Posts posts={posts} savePost={handleSavePost} user={user}/>
        </>
    )
}

export default ProfileContainer;
