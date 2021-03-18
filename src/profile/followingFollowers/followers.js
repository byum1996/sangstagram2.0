import React from 'react';
import { Avatar, Box, Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const renderFollowers = (followers) => {
    return(
        <List>
            { followers.map(({ user }) => {
                const { photoURL, displayName} = user;

                return (
                    <ListItem>
                        <Box m={2}>
                            <Avatar alt='user' src={photoURL}/> 
                        </Box>
                        <Box m={2}>
                            {displayName} 
                        </Box> 
                        <Box m={2}>
                            <Button variant="outlined" color="primary">Remove</Button>
                        </Box> 
                    </ListItem>
                );
            }) }
        </List>
    )
}

const Followers = ({ followers }) => {
    return(
        <>
            <Box>
                { renderFollowers(followers)}
            </Box>
        </>
    )
}

export default Followers;
