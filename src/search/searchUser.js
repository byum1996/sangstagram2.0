import React , {useState} from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SearchBar from './searchBar';
import renderSearchResult from './renderSearch';

const SearchUser = ({ user, searchResult, handleOnFollow, handleOnClickSearch }) => {
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
            <Typography>
                <Box fontWeight="fontWeightBold" m={2} p={2}>
                    Suggested users to search:
                </Box>
                <Box>
                    Brandon Yum, Gunther Park, Sang Yum
                </Box>  
            </Typography>
            <Box display='flex'> { renderSearchResult(user, searchResult, handleOnFollow) } </Box>
        </Box>
    )
}

export default SearchUser;
