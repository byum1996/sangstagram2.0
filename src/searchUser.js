import React , {useState, useEffect} from 'react';
import { searchUser } from './actions/dataAccess/users';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const SearchUser = () => {
    const [searchState, setSearchState] = useState('')
    const [resultState, setResultState] = useState([])
    const [currentTimeState, setCurrentTimeState] = useState('')

    const handleOnSearchChange = (event) => {
        console.log(event.target.value)
        setSearchState(event.target.value)
    }

    const handleOnClickSearch = async () => {
        const result = await searchUser(searchState);
        setResultState(result);

    }

    useEffect(() => {
        setInterval(() => {
            const now = new Date();
            setCurrentTimeState(now.toTimeString());
        }, 1000);
    })

    return(
        <>
        <Box display='flex' justifyContent='center' m={1} p={1}>
            <Box>
                <TextField id="outlined-basic" label="Search users..." variant="outlined" value={searchState} onChange={handleOnSearchChange}/>
            </Box>
            <Box m={1} display='flex' alignItems='center'>
                <Button variant="outlined" color="secondary" onClick={handleOnClickSearch} disabled={!searchState}>Search</Button>
            </Box>
        </Box>

        {currentTimeState}

        {
            <p>{JSON.stringify(resultState)}</p>
        }
        </>
    )
}

export default SearchUser;