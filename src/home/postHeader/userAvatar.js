import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const UserAvatar = ({handleClickOpen, username, url}) => {
    return(
        <Box display='flex' alignItems='row' m={1}>
            <Avatar
                onClick={handleClickOpen} 
                alt={username}
                src={url}
            />
            <Box m={1}>
                <Typography onClick={handleClickOpen}>
                    {username}
                </Typography>
            </Box>
        </Box>
    )
}

export default UserAvatar;
