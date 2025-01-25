// theme.ts
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff803c',
    },
    background: {
      default: '#ffffff', // Same as globals --background do :root
      paper: '#f5f5f5',   // Optional: element's color such as cards
    },
    text: {
      primary: '#ff803c',
      secondary: '#f9c3a5'
    },
  },
  typography: {

    fontFamily: 'Arial, Helvetica, sans-serif', // Same as CSS global
  },
});

export default lightTheme;
