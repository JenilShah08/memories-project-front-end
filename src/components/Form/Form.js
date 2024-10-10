import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts.js';

import { Root, Paper, Form1, FileInput, ButtonSubmit, StyledHeading } from './styles';


const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }
    return (
        <Paper style={{background: 'white'}}>
            <Form1 autoComplete="off" noValidate onSubmit={handleSubmit}>
                <StyledHeading variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</StyledHeading>
                <TextField margin="normal" name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}></TextField>
                <TextField margin="normal" name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}></TextField>
                <TextField margin="normal" name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}></TextField>
                <TextField margin="normal" name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}></TextField>
                <FileInput>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </FileInput>
                <Button variant='contained' color="primary" size="larger" type="submit" fullWidth>Submit</Button>
                <Button variant='contained' color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </Form1>
        </Paper>
    )
}

export default Form;