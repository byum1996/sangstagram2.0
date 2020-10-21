import React from 'react';
import LogoutButton from './logoutbutton';
import UserAvatar from './userAvatar';
import Box from '@material-ui/core/Box';

const UserAndLogout = ({user, logout}) => {
    return(
        <Box display='flex' justifyContent='space-between'>
            <UserAvatar user={user}/>
            <LogoutButton logout={logout}/>
        </Box>
    )
}

export default UserAndLogout;