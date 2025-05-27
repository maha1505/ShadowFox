import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fdd835', // CSK yellow
    },
    secondary: {
      main: '#002147', // CSK dark blue
    },
    background: {
      default: '#fffdf5',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontWeight: 700,
    },
  },
});

export default theme;
