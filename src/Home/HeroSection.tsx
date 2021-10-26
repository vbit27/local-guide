import React from 'react';
import classes from './HeroSection.module.css';
import MediaQuery from 'react-responsive';
import Button from '../shared/Button';
//import Background from '../images/seafood.jpg';

const HeroSection: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        <div className={classes.containerLeft}>
          <div className={classes.gridLeft}>
            <h1 className={classes.title}>
              Experience Saranda as a <strong>local</strong>{' '}
            </h1>
            <p className={classes.subtitle}>
              Experience Saranda as a local. Avoid tourist-traps and find the
              best reccomandations out there Experience Saranda as a local.
              Avoid tourist-traps and find the best reccomandations out there
              est reccomandations out there
            </p>
            <div className={classes.containerButtons}>
              <Button buttonStyle={'btn--main'}>Explore</Button>
              <Button buttonStyle={'btn--outline'}>Read More</Button>
            </div>
          </div>
        </div>

        <MediaQuery minWidth={1300}>
          <div className={classes.backgroundContainer}>
            <div className={classes.imageContainer}></div>
          </div>
        </MediaQuery>
      </div>
    </div>
  );
};

export default HeroSection;
