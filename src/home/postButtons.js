import React, { useState } from 'react';
import CommentField from './comments/commentfield';
import Box from '@material-ui/core/Box';
import AddCommentIcon from '@material-ui/icons/AddComment';
import IconButton from '@material-ui/core/IconButton';

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
      {
        !showFieldState ? (
          <span>
            <Box display='flex' justifyContent='flex-start' m={2}>
              <IconButton onClick={handleOnCommentButton} disabled={showFieldState}>
                <AddCommentIcon />
              </IconButton>
            </Box>
          </span>
        ) : (
          <span>
            <CommentField saveComment={saveComment} handleOnCancelButton={handleOnCancelButton}/>
          </span>
        )
      }
    </>
  );
}

export default PostButtons;
