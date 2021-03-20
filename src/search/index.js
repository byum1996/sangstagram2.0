import React, { useState, useEffect } from 'react';
import { searchUser } from '../actions/dataAccess/users';
import { useMutation, useQueryCache} from 'react-query';
import { followUser } from '../actions/dataAccess/following';
import SearchUser from './searchUser';

const SearchContainer = ({user}) => {
    const cache = useQueryCache();
    const [searchResult, setSearchResult] = useState([])


    const [followUserMutation] = useMutation(followUser, {
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

    useEffect(() => {
        handleOnClickSearch('Brandon Yum')
    }, [])

    return(
        <>
            <SearchUser 
                user={user}
                searchResult={searchResult}
                handleOnFollow={handleOnFollow} 
                handleOnClickSearch={handleOnClickSearch} 
            />
        </>
    )
}

export default SearchContainer;
