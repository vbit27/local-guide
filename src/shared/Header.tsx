import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Local Guide
          </Typography>

          <Button component={Link} to={'/'} color="inherit">
            Home
          </Button>
          <Button component={Link} to={'/explore'} color="inherit">
            Explore
          </Button>
          <Button component={Link} to={'/info'} color="inherit">
            Info
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
