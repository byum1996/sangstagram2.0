import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const UserAvatar = ({user}) => {
    return (
        <Box display='flex' flexDirection='row' m={1} p={5}>
            <Box>
                <Avatar 
                    alt={user.displayName}
                    src='https://picsum.photos/id/237/200/300'
                />
            </Box>
            <Box m={1} display='flex' alignItems='center'>
                <Typography>{user.displayName}</Typography>
            </Box>
        </Box>
    )
}

export default UserAvatar;