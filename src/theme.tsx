import { createTheme } from '@mui/material';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#0f0',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    body2: {
      fontSize: '18px',
      lineHeight: '1.5',
      color: '#566171',
    },
  },
});
