// App.js
import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import { StyledAppBar, StyledImage, StyledHeading } from './styles';  // Import styled components
import "./custom.css";

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="lg">
            <StyledAppBar position="static" color="inherit">
                <StyledHeading variant="h4" align="center">Memories</StyledHeading>
                <StyledImage src={memories} alt="memories" height="40" />
            </StyledAppBar>
            <Grow in>
                <Container>
                <Grid container spacing={6} direction={{ xs: 'column-reverse', sm: 'row', pr: '3', pt: '3', ml: '3' }}>
                        <Grid item xs={12} sm={7} >
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
