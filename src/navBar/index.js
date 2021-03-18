import React from 'react';
import LogoutButton from './logoutbutton';
import LinkButton from './linkButton';
import UserAvatar from './userAvatar';
import Box from '@material-ui/core/Box';


const NavBarContainer = ({user, logout}) => {
    return(
        <Box display='flex' justifyContent='space-between'>
            <UserAvatar user={user}/>
            <LinkButton/>
            <LogoutButton user={user} logout={logout}/>
        </Box>
    )
}

export default NavBarContainer;