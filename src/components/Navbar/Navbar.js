import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import memories from '../../images/memories.png';
import * as actionType from '../../constants/actionTypes';
import {jwtDecode} from 'jwt-decode'; // Import jwtDecode correctly

import { Button, Toolbar, Avatar, Typography, AppBar } from '@mui/material';
import useStyles from './styles';

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const classes = useStyles();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        navigate('/auth');
        setUser(null);
    };

    const checkTokenExpiration = () => {
        const token = user?.token;
        if (token) {
            const decodedToken = jwtDecode(token);
            return decodedToken.exp * 1000 < new Date().getTime();
        }
        return false;
    };

    useEffect(() => {
        const profile = JSON.parse(localStorage.getItem('profile'));
        
        if (profile) {
            // Check if the token is expired
            if (checkTokenExpiration()) {
                logout(); // Logout if expired
            } else {
                setUser(profile); // Update user state only if not expired
            }
        }
    }, [location]); // Only depend on location to re-run effect on route changes


    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Typography className={classes.heading} variant="h2" align="center">
                        Memories
                    </Typography>
                </Link>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
                )}
            </Toolbar >
        </AppBar >
    );
}

export default Navbar;
