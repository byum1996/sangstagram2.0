import React from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

const LogoutButton = ({logout , user}) => {
    const { displayName: username } = user
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box m={5} p={1} display='flex' justifyContent='flex-end'>
                <Link component='button' onClick={handleClickOpen} variant="contained" color="primary"> 
                    <MeetingRoomIcon/> 
                </Link>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Sangstagram"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to log out {username} ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={logout} color="primary">
                    Yes
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    No
                </Button>
                </DialogActions>
            </Dialog>
      </>
    )
}

export default LogoutButton;
