import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

const UserAvatar = ({user}) => {
    return (
        <Box display='flex' flexDirection='row' m={1} p={5}>
            <Box>
                <Avatar 
                    alt={user.displayName}
                    src={user.photoURL}
                />
            </Box>
        </Box>
    )
}

export default UserAvatar;