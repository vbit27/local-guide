import React, { useRef } from 'react';
import classes from './WhySection.module.css';
import World from '../../assets/images/world.jpeg';
import Button from '../Button/Button';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

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
          <div className={clsx(classes.textContainer, classes.second)}>
            <h2>Non-profit</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore. onsetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore. Lorem
              ipsum dolor sit amet, consetetur sadips
            </p>
          </div>
          <div className={clsx(classes.imageContainer, classes.first)}>
            <img src={World} alt="map" />
          </div>
        </div>{' '}
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
      </div>
      <div className={classes.actionContainer}>
        <div className={classes.actionWrapper}>
          <h2>Ready to get started?</h2>
          <p>Lorem ipsum dolor sit amet, consetetur </p>
          <Link to={'/explore'}>
            <Button buttonStyle={'btn--main'}>Explore</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
