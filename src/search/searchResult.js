import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Avatar } from '@material-ui/core';

const SearchResult = ({currentUser, usersFound = [], handleOnFollow, handleOnUnfollow}) => {

    return (
        <List>
            { usersFound.map((userFound, index) => (
            <ListItem key={index}>
                <Box m={2}>
                    <Avatar alt='user' src={userFound.photoURL}/> 
                </Box>
                <Box m={2}>
                    {userFound.displayName} 
                </Box> 
                <Box m={2}>
                    <Button variant="outlined" color="primary" onClick={() => handleOnFollow(currentUser,userFound)}>Follow</Button>
                    <Button variant="outlined" color="primary" onClick={handleOnUnfollow}>Unfollow</Button>
                </Box>
            </ListItem>))}
        </List>
    )
}

export default SearchResult;