import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import UserContext from '../../../utils/UserContext'
import {Redirect} from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
        PIN
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signLogo: {
    height: "20%",
    width: "20%",
    marginBottom: 7,
  }
}));

export default function SignIn() {
  const classes = useStyles();
  
  const { username, password, isLoggedIn, handleInputChange, handleSignInUser, message, rememberMe, handleToggleRemember } = useContext(UserContext);

  return (
    <>
    { isLoggedIn ? <Redirect to={{pathname: '/'}}/> : 
   ( <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <img src="https://image.flaticon.com/icons/svg/212/212816.svg" className={classes.signLogo} alt="pin logo"/>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {message !== '' ? <Alert severity="error">{message}</Alert> : ''}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={username}
            onChange={handleInputChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
           value={password}
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" checked={rememberMe} name="rememberMe" onClick={handleToggleRemember}/>}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSignInUser}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/reset" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>)}
    </>
  );
}