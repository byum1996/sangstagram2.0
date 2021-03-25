import React, { useState } from 'react';
import CommentField from './comments/commentfield';
import Box from '@material-ui/core/Box';
import ChatIcon from '@material-ui/icons/Chat';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ReportIcon from '@material-ui/icons/Report';
import Button from '@material-ui/core/Button';

const PostButtons= ({ saveComment }) => {
    const [ showFieldState, setShowFieldState ] = useState(false)

    const handleOnCommentButton = () => {
      setShowFieldState(true)
    }

    const handleOnCancelButton = () => {
      setShowFieldState(false)
    }

  return (
    <>
      <Box display='flex' justifyContent='flex-start' >
        <Button onClick={handleOnCommentButton} disabled={showFieldState}>
          <ChatIcon />
        </Button>
        <Button onClick={handleOnCancelButton} disabled={!showFieldState}>
          <ChatBubbleOutlineIcon />
        </Button>
        <Button>
          <ReportIcon />
        </Button>
      </Box>
      
      {
        showFieldState && 
        <span>
          <CommentField saveComment={saveComment}/>
        </span>
      }
      
    </>
  );
}

export default PostButtons;
