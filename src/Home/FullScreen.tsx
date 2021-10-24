import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import classes from './FullScreen.module.css';

const FullScreen: React.FC = () => {
  return (
    <div className={classes.grid}>
      <div className={classes.containerLeft}>
        <h1 className={classes.title}>Experience Saranda like a local</h1>
        <p className={classes.subtitle}>
          Experience Saranda like a local. Avoid tourist-traps and find the best
          reccomandations out there
        </p>
        <Button>Explore</Button>
      </div>
      <div className={classes.containerRight}>
        <img src={'./images/seafood.jpg'} alt="sailing-boat" />
      </div>
    </div>
  );
};

export default FullScreen;
