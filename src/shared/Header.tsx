import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { Label } from '@mui/icons-material';

export const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar variant="dense">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Guide
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
};

/*

/// Add the map toggle menu

  const [showMap, setShowMap] = useState<boolean>(true);

interface ExploreProps {
  showMap: boolean;
}

setShowMap={(status: boolean) => setShowMap(status)}

interface HeaderProps {
  setShowMap: (status: boolean) => void;
}

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowMap(event.target.checked);
  }

          <FormGroup sx={{ flexGrow: 1 }}>
            <FormControlLabel
              control={<Switch onChange={(e) => handleChange(e)} />}
              label="Map"
            />
          </FormGroup>
*/
