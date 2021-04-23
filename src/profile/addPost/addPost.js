import React, { useState } from 'react';
import {DropzoneArea} from 'material-ui-dropzone'
import AddPostFab from './addPostFab'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
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
        setCaptionState('')
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
        setCaptionState('')
    }

    const disabledUploadButton = !fileState;

    return (
        <>
            <AddPostFab handleOnClickOpen={handleOnClickOpen}/>
            <Dialog fullWidth={true} open={openState} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <DropzoneArea 
                        onChange={handleOnDropzoneChange} 
                        dropzoneText={'Click/drag to upload a file.'}
                        showFileNames={true}
                    />
                    <TextField 
                        autoFocus
                        id="outlined-basic" 
                        variant="outlined"
                        margin="dense" 
                        label="Caption (optional)" 
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
