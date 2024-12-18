import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode"; // Import JWT decode to extract user info from token
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';
import Input from './Input';
import Icon from './Icon';
import { signin, signup } from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

const Auth = () => {
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  // const isSignup = true;
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));

    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  }

  const googleSuccess = async (res) => {
    const token = res?.credential;  // The JWT token
    console.log("JWT Token:", token); // Log the token

    try {
        const decodedResult = jwtDecode(token); // Decoding the token to get user information
        console.log("Decoded User Profile:", decodedResult); // Log the decoded user profile

        dispatch({ type: 'AUTH', data: { result: decodedResult, token } });
        navigate('/'); // Redirect after successful sign-in
    } catch (error) {
        console.error("Error decoding token:", error);
    }
};

const googleFailure = (error) => {
    console.log("Google Sign In was unsuccessful. Try Again Later!", error);
};


  return (
    <Container component="main" maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                </>
              )
            }
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{isSignup ? 'Sign Up' : 'Sign In'}</Button>
          {/* Updated GoogleOAuthProvider and GoogleLogin */}
          <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <GoogleLogin
                onSuccess={googleSuccess}
                onError={googleFailure}
                render={(renderProps) => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        Google Sign In
                    </button>
                )}
            />
        </GoogleOAuthProvider>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth