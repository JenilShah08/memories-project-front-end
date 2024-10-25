// styles.js
import { makeStyles } from '@mui/styles';
// import { TextField, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    textField: {
        '& label.Mui-focused': {
            color: 'rgba(0,183,255, 1)',  // Change label color when focused
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'gray',  // Default border color
            },
            '&:hover fieldset': {
                borderColor: 'rgba(0,183,255, 1)',  // Border color on hover
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgba(0,183,255, 1)',  // Border color when focused
            },
        },
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: 10,
    },
}));

export default useStyles;
