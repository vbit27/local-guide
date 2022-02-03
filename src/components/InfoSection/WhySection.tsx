import React, { useRef } from 'react';
import classes from './WhySection.module.css';
import World from '../../assets/images/world.jpeg';
import Button from '../Button/Button';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const WhySection: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        <div className={classes.itemContainer}>
          <div className={classes.textContainer}>
            <h2>Non-profit</h2>
            <p>
              All the recommendations listed on this website are personal
              favorite spots of locals. We don't accept any advertisement and we
              recommend places based only on quality.
            </p>
          </div>
          <div className={classes.imageContainer}>
            <img src={World} alt="map" />
          </div>
        </div>
        <div className={classes.itemContainer}>
          <div className={clsx(classes.textContainer, classes.second)}>
            <h2>Budget-friendly</h2>
            <p>
              We always strive to list fairly-priced services. If a local can't
              afford it, then you won't find it on this website.
            </p>
          </div>
          <div className={clsx(classes.imageContainer, classes.first)}>
            <img src={World} alt="map" />
          </div>
        </div>{' '}
        <div className={classes.itemContainer}>
          <div className={classes.textContainer}>
            <h2>Curated list</h2>
            <p>
              We try to keep our list updated and as small as possible. We only
              recommend "hidden-gems" that can be hard to be found with an easy
              google search
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
