import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

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

const SearchBar = ({ searchState, handleOnSearchChange, handleOnClickSearch  }) => {
    const classes = useStyles();

  return (
      <Box display='flex' justifyContent='center'>
        <Paper className={classes.root} varaint='outlined' elevation={10}>
            <InputBase
                value={searchState} 
                onChange={handleOnSearchChange}
                className={classes.input}
                placeholder="Search users..."
            />
            <IconButton 
                className={classes.iconButton} 
                aria-label="search" 
                onClick={handleOnClickSearch} 
                disabled={!searchState}
            >
                <SearchIcon/>
            </IconButton>
        </Paper>
      </Box>
  );
}

export default SearchBar;
