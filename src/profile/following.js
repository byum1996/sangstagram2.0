import React from 'react';
import { Typography, Avatar, Box, Button } from '@material-ui/core';
import { unfollowUser } from '../actions/dataAccess/following';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const renderFollowing = (followingResult) => {
    const handleOnClick = (id) => {
        unfollowUser(id)
    }

    return(
        <List>
            { followingResult.map(({ id, following }) => {
                const { photoURL, displayName} = following;

                return (
                    <ListItem>
                        <Box m={2}>
                            <Avatar alt='user' src={photoURL}/> 
                        </Box>
                        <Box m={2}>
                            {displayName} 
                        </Box> 
                        <Box m={2}>
                            <Button variant="outlined" onClick={() => handleOnClick(id)} color="primary">Unfollow</Button>
                        </Box> 
                    </ListItem>
                );
            }) }
        </List>
    )
}

const Following = ({ followingResult }) => {
    return(
        <>
            <Box display='flex' flexDirection='row'>
                <Typography variant="h3" gutterBottom>Following</Typography>
            </Box>
            
            <Box>
                { renderFollowing(followingResult)}
            </Box>
        </>
    )
}

export default Following;
