import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const User = ({ avatarUrl, username }) => {
    const url = avatarUrl || 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzNjE5MzY5M15BMl5BanBnXkFtZTgwMDI5ODMxODE@._V1_UY256_CR98,0,172,256_AL_.jpg';

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