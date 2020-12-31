import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const SearchBar = ({ searchState, handleOnSearchChange, handleOnClickSearch }) => {
    return (
        <Box display='flex' justifyContent='center' m={1} p={1}>
        <Box>
            <TextField id="outlined-basic" label="Search users..." variant="outlined" value={searchState} onChange={handleOnSearchChange}/>
        </Box>
        <Box m={1} display='flex' alignItems='center'>
            <Button variant="outlined" color="secondary" onClick={handleOnClickSearch} disabled={!searchState}>Search</Button>
        </Box>
    </Box>
    )
}

export default SearchBar;
