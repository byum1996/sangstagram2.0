import React from 'react';
import { useQuery, useMutation, useQueryCache} from 'react-query';
import { Box } from '@material-ui/core';
import { getFollowing, getFollowers, unfollowUser } from '../actions/dataAccess/following';
import Following from './following';
import Followers from './followers';

const FollowingFollowersContainer = ({user}) => {

    const cache = useQueryCache();
    
    const { isLoading, isError, data, error } = useQuery('following', () => getFollowing(user.displayName))

    const { 
        isLoading: isFollowersLoading, 
        isError: isFollowersError, 
        data: followers, 
        error: followersError 
    } = useQuery('followers', () => getFollowers(user.displayName))

    const [unfollowUserMutation] = useMutation(unfollowUser, {
        onSuccess: () => {
            // Query Invalidations
            cache.invalidateQueries('following')
        },
        onError: (error, variables, context) => {
            // An error happened!
        },
    });

    const handleOnUnfollow = (id) => {
        unfollowUserMutation(id)
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

    return(
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
            <Box display='flex' flexDirection='column'>
                <Following 
                    followingResult={data} 
                    user={user} 
                    handleOnUnfollow={handleOnUnfollow}
                />
            </Box>
            <Box display='flex' flexDirection='column'>
                <Followers user={user} followers={followers}/>
            </Box>
        </Box>
    )
}

export default FollowingFollowersContainer;
