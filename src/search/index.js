import React, { useState } from 'react';
import { searchUser } from '../actions/dataAccess/users';
import { useMutation, useQueryCache} from 'react-query';
import { followUser, unfollowUser } from '../actions/dataAccess/following';
import SearchUser from './searchUser';

const SearchContainer = ({user}) => {
    const cache = useQueryCache();
    const [searchResult, setSearchResult] = useState([])

    console.log('user', user)

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
            cache.invalidateQueries('following')
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
    
    return(
        <>
            <SearchUser 
                user={user}
                searchResult={searchResult}
                handleOnFollow={handleOnFollow}
                handleOnUnfollow={handleOnUnfollow} 
                handleOnClickSearch={handleOnClickSearch} 
            />
        </>
    )
}

export default SearchContainer;
