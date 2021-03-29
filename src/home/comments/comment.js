import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';

const Comment = ({ comment, removeComment }) => {
    const { userAvatar, createdAt, createdBy, text } = comment;

    const handleOnClickRemove = () => {
        removeComment()
    }
    
    return (
        <Box className="CommentsSpace" display='flex' flexDirection='row' justifyContent='space-between'>
            <Box display='flex' alignItems='row' m={1}>
                <Avatar alt="Comments" src={userAvatar} />
                <Typography>
                    <Box fontWeight="fontWeightBold" m={1}>
                        {createdBy}
                    </Box>
                </Typography>
                <Typography variant="subtitle2" onClick={handleOnClickRemove} >
                    <Box fontStyle="italic" m={1}>
                        {text}
                    </Box>
                </Typography> 
            </Box>
            <Box m={2} display='flex' flexDirection='row'>
                <Typography variant='caption'>{createdAt.toLocaleDateString()}</Typography>
            </Box>    
        </Box>
    )
}

export default Comment;
