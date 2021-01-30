import React from 'react';
import Box from '@material-ui/core/Box';

const Pictures = ({photoUrl}) => {

    return (
        <Box display='flex' justifyContent='center' m={1} p={1}>
            <img 
                alt='ProfilePic'
                src={photoUrl}
            />
        </Box>
    )
}

export default Pictures;