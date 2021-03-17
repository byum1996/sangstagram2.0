import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const PostHeader = ({ avatarUrl, username }) => {
    const url = avatarUrl || 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzNjE5MzY5M15BMl5BanBnXkFtZTgwMDI5ODMxODE@._V1_UY256_CR98,0,172,256_AL_.jpg';

    return (
        <Box display='flex' flexDirection='row' justifyContent='flex-start' p={10}>
            <Box display='flex' alignItems='row' m={1}>
                <Avatar 
                    alt={username}
                    src={url}
                />
                <Box m={1}>
                    <Typography>
                        {username}
                    </Typography>
                </Box>
            </Box>
        </Box>
                

    )
}

export default PostHeader;
