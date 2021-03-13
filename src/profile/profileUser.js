import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const ProfileUser = ({user}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        large: {
          width: theme.spacing(20),
          height: theme.spacing(20),
        },
      }));
    
    const { displayName, photoURL } = user;

    const classes = useStyles();

    return (
      <>
        <Box display='flex' flexDirection="column" m={1} p={1}>
            <Box>
                <Avatar
                    alt={displayName}
                    src={photoURL}
                    className={classes.large}
                />
              </Box>
            <Box display="flex" p={1} m={1}>
                <Typography variant="h5" >
                  {user.displayName}
                </Typography>
            </Box>
            
        </Box>
    </>
    )
}

export default ProfileUser;
