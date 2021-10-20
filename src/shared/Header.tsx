import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { Label } from '@mui/icons-material';

export const Header: React.FC<HeaderProps> = ({ setShowMap }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowMap(event.target.checked);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Local Guide
          </Typography>
          <FormGroup sx={{ flexGrow: 1 }}>
            <FormControlLabel
              control={<Switch onChange={(e) => handleChange(e)} />}
              label="Map"
            />
          </FormGroup>
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
};

interface HeaderProps {
  setShowMap: (status: boolean) => void;
}
