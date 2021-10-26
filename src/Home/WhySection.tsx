import React from 'react';
import classes from './WhySection.module.css';
import World from '../assets/images/world.jpeg';
import Button from '../shared/Button';

const WhySection: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h1>Why localguide</h1>
      </div>
      <div className={classes.grid}>
        <div className={classes.itemContainer}>
          <div className={classes.textContainer}>
            <h2>Non-profit</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore. onsetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore. Lorem
              ipsum dolor sit amet, consetetur sadips
            </p>
          </div>
          <div className={classes.imageContainer}>
            <img src={World} alt="map" />
          </div>
        </div>
        <div className={classes.itemContainer}>
          <div className={classes.imageContainer}>
            <img src={World} alt="map" />
          </div>
          <div className={classes.textContainer}>
            <h2>Non-profit</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore. onsetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore. Lorem
              ipsum dolor sit amet, consetetur sadips
            </p>
          </div>
        </div>{' '}
        <div className={classes.itemContainer}>
          <div className={classes.imageContainer}>
            <img src={World} alt="map" />
          </div>
          <div className={classes.textContainer}>
            <h2>Non-profit</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore. onsetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore. Lorem
              ipsum dolor sit amet, consetetur sadips
            </p>
          </div>
        </div>
      </div>
      <Button buttonStyle={'btn--main'}>Explore</Button>
    </div>
  );
};

export default WhySection;
