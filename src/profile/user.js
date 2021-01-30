import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const User = ({ userAvatar, username }) => {
    const url = userAvatar
    return (
        <Box display='flex' flexDirection='row'>
            <Box m={1}>
                <Avatar 
                    alt={username}
                    src={url}
                />
            </Box>
            <Box display='flex' alignItems='center'>
                <Typography>
                    {username}
                </Typography>
            </Box>  
        </Box>
    )
}

export default User;