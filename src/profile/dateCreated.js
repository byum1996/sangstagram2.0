import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const DateCreated = ({ dateCreated }) => {

    return (
        <Box display='flex' justifyContent='center'>
            <Typography>{dateCreated.toLocaleDateString()}</Typography>
        </Box>
    )
}

export default DateCreated;