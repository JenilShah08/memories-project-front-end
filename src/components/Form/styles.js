import { styled } from '@mui/material/styles';
import { TextField, Typography } from '@mui/material';

// Styled components
export const Root = styled('div')(({ theme }) => ({
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
    },
}));

export const Paper = styled('div')(({ theme }) => ({
    padding: theme.spacing(2),
}));

export const StyledHeading = styled(Typography)({
    color: 'rgba(0,183,255, 1)',
});

export const StyledTextField = styled(TextField)({
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
  });

export const Form1 = styled('form')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
});

export const FileInput = styled('div')({
    width: '97%',
    margin: '10px 0',
});

export const ButtonSubmit = styled('button')({
    marginBottom: 10,
});
