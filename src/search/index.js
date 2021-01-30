import React, { useState } from 'react';
import { searchUser } from '../actions/dataAccess/users';
import { useQuery, useMutation, useQueryCache} from 'react-query';
import { getFollowing, unfollowUser, followUser } from '../actions/dataAccess/following';
import Following from './following';
import SearchUser from './searchUser';

const SearchContainer = ({user}) => {
    const cache = useQueryCache();
    const [searchResult, setSearchResult] = useState([])
    
    const { isLoading, isError, data, error } = useQuery('following', () => getFollowing(user.displayName))

    const [followUserMutation] = useMutation(followUser, {
        onSuccess: () => {
            // Query Invalidations
            cache.invalidateQueries('following')
        },
        onError: (error, variables, context) => {
            // An error happened!
        },
    });

    const [unfollowUserMutation] = useMutation(unfollowUser, {
        onSuccess: () => {
            // Query Invalidations
            cache.invalidateQueries('following')
        },
        onError: (error, variables, context) => {
            // An error happened!
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

        const filteredResult = searchResult.filter(({ email }) => email !== following.email);
        setSearchResult(filteredResult);
    }

    const handleOnUnfollow = (id) => {
        unfollowUserMutation(id)
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
            <Following 
                followingResult={data} 
                user={user} 
                handleOnUnfollow={handleOnUnfollow}
            />
        </>
    )
}

export default SearchContainer;
