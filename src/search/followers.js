import React from 'react';
import { Typography, Avatar, Box, Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const renderFollowers = (followers) => {
    console.log('followers',followers)
    return(
        <List>
            { followers.map(({ id, user }) => {
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
                            <Button variant="outlined">Remove</Button>
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
            <Box display='flex' flexDirection='row'>
                <Typography variant="h3" gutterBottom>Followers</Typography>
            </Box>
            
            <Box>
                { renderFollowers(followers)}
            </Box>
        </>
    )
}

export default Followers;
