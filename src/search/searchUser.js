import React , {useState} from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SearchBar from './searchBar';
import renderSearchResult from './renderSearch';

const SearchUser = ({user, searchResult, handleOnFollow, handleOnClickSearch }) => {
    const [searchState, setSearchState] = useState('')

    const handleOnSearchChange = (event) => {
        setSearchState(event.target.value)
    }
    return(
        <Box>
            <SearchBar
                searchState={searchState} 
                handleOnSearchChange={handleOnSearchChange} 
                handleOnClickSearch={() => handleOnClickSearch(searchState)}
            />
            <Box m={1} p={1}>
                <Typography hidden={searchState}>Suggested users to follow:</Typography>
            </Box>  
            <Box display='flex'> { renderSearchResult(user, searchResult, handleOnFollow) } </Box>
        </Box>
    )
}

export default SearchUser;
