import React from "react";
import GoogleButton from "react-google-button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

export default function Unauthenticated({ login }) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <form className={classes.form} noValidate>
            <Box display="flex" justifyContent="center" m={5} p={5}>
              <GoogleButton
                onClick={login}
                variant="contained"
                color="secondary"
              />
            </Box>
            <Box display="flex" justifyContent="center" m={1} p={1}>
              <Link
                href="https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp"
                color="secondary"
                variant="body2"
              >
                Don't have a Google account? Sign up!
              </Link>
            </Box>
            <Box m={1}>
              <Typography>
                Use this Google account to avoid using own credentails when
                accessing Sangstagram.
              </Typography>
              <Box m={1} p={3}>
                <Typography>Username: sangstagramtest@gmail.com</Typography>
                <Typography>Password: TestPassword123</Typography>
              </Box>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
