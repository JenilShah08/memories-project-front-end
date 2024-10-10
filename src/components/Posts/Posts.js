import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import Post from './Post/Post';

import { useSelector } from 'react-redux';

import {MainContainer, SmMargin ,ActionDiv} from './styles';
// import { set } from 'mongoose';

const Posts = ({cureentId, setCurrentId}) => {
    const posts = useSelector((state) => state.posts );
    console.log(posts);
    return (
       !posts.length ? <CircularProgress /> : (
        <Grid className="container" container alignitems="stretch" spacing="3">
            {posts.map((post) => (
                <Grid key="post._id" item xs={12} sm={6}>
                    <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
            ))};
        </Grid>
       )
    );
}

export default Posts;