import React from 'react';
import GoogleButton from 'react-google-button'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import LinkedCameraIcon from '@material-ui/icons/LinkedCamera';

const Unauthenticated = ({login}) => {
    return (
        <>
            <Box display='flex' justifyContent='center' m={5} p={5}>
                <Box m={1}>
                    <Typography variant="h1" gutterBottom>Sangstagram</Typography>
                </Box>
                <Box m={1}>
                    <LinkedCameraIcon fontSize='large'/>
                </Box>
            </Box>
            <Box display='flex' justifyContent='center' m={5} p={5}>
                <GoogleButton onClick={login} variant="contained" color="secondary" />
            </Box>
            <Box display='flex' justifyContent='center' m={1} p={1}>
            <Link href="https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp" color="secondary" variant="body2">
                Don't have a Google account? Sign up!
              </Link>
            </Box>
        </>
    )
}

export default Unauthenticated;
