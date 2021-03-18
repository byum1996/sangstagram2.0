import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

const FollowingCount = ({followingNumber}) => {
    return(
        <Box display="flex" flexDirection="column" p={1} m={1}>
            <Typography>FOLLOWING</Typography>
            <Typography variant="overline">{followingNumber}</Typography>
        </Box>
    )
}

export default FollowingCount;
