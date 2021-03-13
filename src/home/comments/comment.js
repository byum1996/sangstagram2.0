import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core';

const Comment = ({ comment }) => {
    const { userAvatar, createdAt, createdBy, text } = comment;
    
    return (
        <Box className="CommentsSpace" display='flex' flexDirection='row' alignItems='center'>
            <Box m={1} >
                <Avatar alt="Comments" src={userAvatar} />
            </Box>
            <Box m={1}>
                <Button>{createdBy}</Button>
            </Box>
            <Box m={1}>
                <Typography variant="subtitle2" >{text}</Typography> 
            </Box>
            <Box m={1} dispay='flex' justifyContent='flex-end'>
                <Typography variant='caption'>{createdAt.toLocaleDateString()}</Typography>
            </Box>    
        </Box>
    )
}

export default Comment;
