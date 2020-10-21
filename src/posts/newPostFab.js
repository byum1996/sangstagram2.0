import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function NewPostFab({handleOnClick}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Fab 
            onClick={handleOnClick}
            color="primary" 
            aria-label="add" 
            className='UploadButton' 
            size='large'>
            <AddIcon />
        </Fab>
    </div>
  );
}