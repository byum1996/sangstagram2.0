import React from 'react';
import Box from '@material-ui/core/Box';

const Photo = ({ photoUrl }) => {

    const url = photoUrl || 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';
    return (
        <Box display='flex' justifyContent='center' m={1} p={1}>
            <img 
                alt='PostPic'
                src={url}
            />
        </Box>
    )
}

export default Photo;