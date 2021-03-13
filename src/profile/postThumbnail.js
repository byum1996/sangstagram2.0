import React, {useState} from 'react';
import Post from './post';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));
  
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const PostThumbnail = ({post, handleOnDeletePost, saveComment}) => {
    const classes = useStyles();
    const { photoUrl } = post
    const [openState, setOpenState] = useState(false);

    const handleOnClickOpen = () => {
        setOpenState(true);
    };

    const handleOnClickClose = () => {
        setOpenState(false);
    };

    return (
        <>
            <img 
                className='ProfileThumbnailPic'
                onClick={handleOnClickOpen}
                alt='ProfileThumbnailPic'
                src={photoUrl}
            />
            <Dialog fullScreen open={openState} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleOnClickClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <IconButton edge="end" color='inherit' onClick={()=> handleOnDeletePost(post.id)} aria-label="remove">
                            <DeleteIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Post post={post} saveComment={saveComment}/>
            </Dialog>

        </>
    )
}

export default PostThumbnail;
