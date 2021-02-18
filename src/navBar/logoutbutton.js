import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

const LogoutButton = ({logout}) => {
    return (
        <Box m={5} p={1} display='flex' justifyContent='flex-end'>
            <Button onClick={logout} variant="contained" color="primary"> 
                <MeetingRoomIcon/> 
            </Button>
        </Box>
    )
}

export default LogoutButton;
