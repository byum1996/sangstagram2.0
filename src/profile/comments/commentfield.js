import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import PublishIcon from '@material-ui/icons/Publish';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 750,
    opacity: 0.7,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const CommentField = ({ saveComment }) => {
    const classes = useStyles();

    const [fieldState, setFieldState] = useState('');

    const handleOnChange = (event) => {
        setFieldState(event.target.value)
    }

    const handleOnClick = () => {
        saveComment({
            text: fieldState,            
        });
        setFieldState('')
    }

  return (
      <Box display='flex' justifyContent='center' p={2}>
        <Paper className={classes.root} varaint='outlined' elevation={10}>
            <InputBase
                onChange={handleOnChange}
                value={fieldState}
                className={classes.input}
                placeholder="Enter comment here..."
            />
            <IconButton 
                className={classes.iconButton} 
                aria-label="search" 
                disabled={fieldState.length === 0} 
                onClick={handleOnClick}
            >
                <PublishIcon />
            </IconButton>
        </Paper>
    </Box>
  );
}

export default CommentField;
