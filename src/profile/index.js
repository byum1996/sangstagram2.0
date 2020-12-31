import React, { useState } from 'react';
import { searchUser } from '../actions/dataAccess/users';
import { useQuery, useMutation, useQueryCache} from 'react-query';
import { getFollowing, unfollowUser, followUser } from '../actions/dataAccess/following';
import Following from './following';
import SearchUser from './searchUser';

const ProfileContainer = ({user}) => {
    const cache = useQueryCache();
    const [searchResult, setSearchResult] = useState([])
    
    const { isLoading, isError, data, error } = useQuery('following', () => getFollowing(user.displayName))

    const [followUserMutation] = useMutation(followUser, {
        onSuccess: () => {
            console.log('success!!!')
            // Query Invalidations
            cache.invalidateQueries('following')
        },
        onError: (error, variables, context) => {
            // An error happened!
            console.log('onError', { error, variables })
            console.log(`rolling back optimistic update with id ${context.id}`)
        },
    });

    const handleOnClickSearch = async (searchTerm) => {
        const result = await searchUser(searchTerm);
        setSearchResult(result);
    }

    const handleOnFollow = (user,following) => {
        followUserMutation({
            user,
            following
        });
    }

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return(
        <>
            <SearchUser 
                user={user}
                searchResult={searchResult}
                handleOnFollow={handleOnFollow} 
                handleOnClickSearch={handleOnClickSearch} 
            />
            <Following followingResult={data} user={user} unfollowUser={unfollowUser}/>
        </>
    )
}

export default ProfileContainer;
