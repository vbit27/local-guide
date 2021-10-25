import clsx from 'clsx';
import React from 'react';
import classes from './AboutSection.module.css';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import Button from '../shared/Button';

const AboutSection: React.FC = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.grid}>
          <div className={clsx(classes.firstContainer)}>
            <h1>What is localguide</h1>
          </div>
          <div className={clsx(classes.secondContainer)}>
            <div className={clsx(classes.itemContainer)}>
              <YoutubeSearchedForIcon />
              <h2>Currated List</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore. onsetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore. Lorem ipsum dolor sit amet, consetetur sadips
              </p>
            </div>
            <div className={clsx(classes.itemContainer)}>
              <YoutubeSearchedForIcon />
              <h2>Currated List</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore. onsetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore. Lorem ipsum dolor sit amet, consetetur sadips
              </p>
            </div>
            <div className={clsx(classes.itemContainer)}>
              <YoutubeSearchedForIcon />
              <h2>Currated List</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore. onsetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore. Lorem ipsum dolor sit amet, consetetur sadips
              </p>
            </div>
          </div>
          <div className={clsx(classes.thirdContainer)}>
            <Button buttonStyle={'btn--main'}>Explore</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
