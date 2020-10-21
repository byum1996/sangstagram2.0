import React, {useState} from 'react';
import {DropzoneArea} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const NewPost = ({handleOnSubmit, handleOnCancel}) => {
    const [captionState, setCaptionState] = useState('')
    const [fileState, setFileState] = useState()
 
    const handleOnCaptionChange = (event) => {
        console.log(event.target.value)
        setCaptionState(event.target.value)
    }

    const handleOnDropzoneChange = (files) => {
        if (files.length === 0) {
            setFileState(undefined)
        } else if (files.length > 0) {
            setFileState(files[0]) 
        }
    }

    const handleOnSubmitClick = () => {
        handleOnSubmit(fileState, captionState)
    }

    const disableSubmitButton = !fileState || !captionState;
    
    return (
        <Box>
            <Box m={1} p={1}>
                <DropzoneArea onChange={handleOnDropzoneChange}/>
            </Box>
            <Box m={1} p={1} display="flex" justifyContent="center">
                <TextField id="filled-basic" label="Caption" variant="filled" value={captionState} onChange={handleOnCaptionChange} />
            </Box>
            <Box m={1} p={1} display="flex" justifyContent="space-around">
                <Button variant="contained" color="primary" disabled={disableSubmitButton} onClick={handleOnSubmitClick} >Submit</Button>
                <Button variant='contained' color='secondary' onClick={handleOnCancel}>Cancel</Button>
            </Box>
        </Box>
    )
}

export default NewPost;

