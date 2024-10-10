import React from 'react';
import { CardContent, CardMedia, Button, Typography, CardActions } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { Media, Overlay, Overlay2, Details, Title, CustomCardActions, StyledCard } from './styles'; // Import the styled components
import {useDispatch} from 'react-redux';
import {deletePost, likePost} from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    return (
        <StyledCard>
            <CardMedia
                className="media"
                component="img"
                image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
                title={post.title}
            />
            <Overlay>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </Overlay>
            <Overlay2>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </Overlay2>
            <Details>
                <Typography variant="body2" color="textSecondary">
                    {post.tags.map((tag) => `#${tag} `)}
                </Typography>
            </Details>
            <CardContent>
                <Typography className="title" variant="h5" gutterBottom>
                    {post.title}
                </Typography>
                <Typography className="title" color="textSecondary" component="p" variant="body2">
                    {post.message}
                </Typography>
            </CardContent>
            <CustomCardActions>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small" />&nbsp;Like&nbsp;{post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />&nbsp;Delete&nbsp;
                </Button>
            </CustomCardActions>
        </StyledCard>
    );
};

export default Post;
