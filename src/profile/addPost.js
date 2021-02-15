import React, { useState } from 'react';
import {DropzoneArea} from 'material-ui-dropzone'
import AddPostFab from './addPostFab'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const AddPost = ({handleOnSubmit, user}) => {
    const [ openState, setOpenState ] = useState(false)
    const [ fileState, setFileState ] = useState()
    const [ captionState, setCaptionState ] = useState('')

    const handleOnClickOpen = () => {
        setOpenState(true)
    }

    const handleOnCaptionChange = (event) => {
        setCaptionState(event.target.value)
    }

    const handleOnClickClose = () => {
        setOpenState(false)
    }

    const handleOnDropzoneChange = (files) => {
        if (files.length === 0) {
            setFileState(undefined)
        } else if (files.length > 0) {
            setFileState(files[0]) 
        }
    }

    const handleOnSubmitClick = () => {
        handleOnSubmit(fileState, captionState, user)
        setOpenState(false)
    }

    const disabledUploadButton = !fileState;

    return (
        <>
            <AddPostFab handleOnClickOpen={handleOnClickOpen}/>
            <Dialog open={openState} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Post</DialogTitle>
                <DialogContent>
                    <DropzoneArea onChange={handleOnDropzoneChange}/>
                    <TextField 
                        autoFocus
                        margin="dense" 
                        label="Caption" 
                        value={captionState} 
                        onChange={handleOnCaptionChange}
                        fullWidth 
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleOnClickClose} color="primary">
                        Cancel
                    </Button>
                    <Button disabled={disabledUploadButton} onClick={handleOnSubmitClick} color="primary">
                        Upload Post
                    </Button>
                </DialogActions>
            </Dialog>
       </>
    )
}

export default AddPost;
