// styles.js
import { styled } from '@mui/material/styles';
import { AppBar, Typography } from '@mui/material';

// Styled AppBar using the styled API
export const StyledAppBar = styled(AppBar)({
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
});

// Styled Image
export const StyledImage = styled('img')({
    marginLeft: '15px',
});

export const StyledHeading = styled(Typography)({
    color: 'rgba(0,183,255, 1)',
});
