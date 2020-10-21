import React from 'react';
import Button from '@material-ui/core/Button';

const Unauthenticated = ({login}) => {
    return (
        <>
            <h1>Unauthenticated Page</h1>
            <Button onClick={login} variant="contained" color="secondary">Login</Button>
        </>
    )
}

export default Unauthenticated;
