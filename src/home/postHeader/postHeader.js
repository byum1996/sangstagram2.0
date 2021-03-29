import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import LikeButton from './likeButton'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import UserAvatar from './userAvatar';
import FollowersCount from './followersCount';
import FollowingCount from './followingCount';

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

const PostHeader = ({ avatarUrl, username, likedAlready, likeClicked, getFollowingFollowersNumbers }) => {
    const url = avatarUrl || 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzNjE5MzY5M15BMl5BanBnXkFtZTgwMDI5ODMxODE@._V1_UY256_CR98,0,172,256_AL_.jpg';
    
    const [followersNumberState, setFollowersNumber] = useState(0);
    const [followingNumberState, setFollowingNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const handleClickOpen = async () => {
        const { followersNumber, followingNumber } = await getFollowingFollowersNumbers();
        setFollowersNumber(followersNumber);
        setFollowingNumber(followingNumber);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
          <UserAvatar url={url} handleClickOpen={handleClickOpen} username={username} />
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {username}
                </DialogTitle>
                <DialogContent dividers>
                  <Box display='flex' flexDirection='row'>
                    <FollowingCount followingNumber={followingNumberState}/>
                    <FollowersCount followersNumber={followersNumberState}/>
                  </Box>
                </DialogContent>
            </Dialog>
            <Box>
                <LikeButton likedAlready={likedAlready} likeClicked={likeClicked} />
            </Box>
        </Box>
    )
}

export default PostHeader;
