import { Button } from '@mui/material';
import React from 'react';
import classes from './FullScreen.module.css';
import MediaQuery from 'react-responsive';
import ExploreBtn from '../shared/ExploreBtn';
import ReadMoreBtn from '../shared/ReadMoreBtn';

const FullScreen: React.FC = () => {
  return (
    <div className={classes.grid}>
      <div className={classes.containerLeft}>
        <h1 className={classes.title}>
          Experience Saranda as a <strong>local</strong>{' '}
        </h1>
        <p className={classes.subtitle}>
          Experience Saranda as a local. Avoid tourist-traps and find the best
          reccomandations out there Experience Saranda as a local. Avoid
          tourist-traps and find the best reccomandations out there est
          reccomandations out there
        </p>
        <div className={classes.containerButtons}>
          <ExploreBtn />
          <ReadMoreBtn />
        </div>
      </div>

      <MediaQuery minWidth={1000}>
        <div className={classes.containerRight}>
          <img src={'./images/background2.jpg'} alt="sailing-boat" />
        </div>
      </MediaQuery>
    </div>
  );
};

export default FullScreen;
