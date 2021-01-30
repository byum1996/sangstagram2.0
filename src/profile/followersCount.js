import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const FollowersCount = ({followersNumber}) => {

    return (
        <Box display="flex" flexDirection="column" p={1} m={1}>
            <Typography>FOLLOWERS</Typography>
            <Typography variant="overline">{followersNumber}</Typography>
        </Box>
    )
}

export default FollowersCount;
