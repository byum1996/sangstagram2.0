import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const DateCreatedAndLikes = ({ dateCreated, numberOfLikes = []}) => {

    return (
        <>
            <Box display='flex' flexDirection='row' justifyContent='space-around'>
                <Typography>
                    <Box fontWeight="fontWeightBold" m={1}>
                        {dateCreated.toLocaleDateString()}
                    </Box>
                </Typography>
                <Box display='flex' alignItems='row'>
                    <Typography>
                        <Box fontWeight="fontWeightBold" m={1}>
                            {numberOfLikes.length}
                        </Box>
                    </Typography>
                    <Typography>
                        <Box fontWeight="fontWeightBold" m={1}>
                            likes
                        </Box>
                    </Typography>
                </Box>   
            </Box>
        </>
    )
}

export default DateCreatedAndLikes;