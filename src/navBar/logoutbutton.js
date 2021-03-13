import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

const LogoutButton = ({logout}) => {
    return (
        <Box m={5} p={1} display='flex' justifyContent='flex-end'>
            <Link component='button' onClick={logout} variant="contained" color="primary"> 
                <MeetingRoomIcon/> 
            </Link>
        </Box>
    )
}

export default LogoutButton;
