import React, {useState} from 'react';
import Post from './post';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from "@material-ui/core/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
    rightToolbar: {
      marginLeft: "auto",
      marginRight: -12
    },
  })

const PostThumbnail = ({post, handleOnDeletePost}) => {
    const { photoUrl } = post
    const [openState, setOpenState] = useState(false);

    const classes = useStyles()

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
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleOnClickClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <div className={classes.rightToolbar}>
                            <IconButton color='inherit' onClick={()=> handleOnDeletePost(post.id)} aria-label="remove">
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <Post post={post} />
            </Dialog>
        </>
    )
}

export default PostThumbnail;
