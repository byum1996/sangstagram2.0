import React , {useState} from 'react';
import Box from '@material-ui/core/Box';
import SearchBar from './searchBar';
import renderSearchResult from './renderSearch';

const SearchUser = ({user, searchResult, handleOnFollow, handleOnClickSearch}) => {
    const [searchState, setSearchState] = useState('')

    const handleOnSearchChange = (event) => {
        setSearchState(event.target.value)
    }

    return(
        <>
        <SearchBar
            searchState={searchState} 
            handleOnSearchChange={handleOnSearchChange} 
            handleOnClickSearch={() => handleOnClickSearch(searchState)}
        />

        <Box display='flex'> { renderSearchResult(user, searchResult, handleOnFollow) } </Box>
        </>
    )
}

export default SearchUser;
