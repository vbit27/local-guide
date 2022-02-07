import clsx from 'clsx';
import React from 'react';
import classes from './AboutSection.module.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import NonProfit from '../../assets/images/non-profit.jpg';
import Budget from '../../assets/images/budget-friendly.jpg';
import Curated from '../../assets/images/curated-list.jpg';

const AboutSection: React.FC<AboutProps> = ({ myRef }) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.firstGrid}>
          <div className={clsx(classes.firstItem)}>
            <h1>What is localguide</h1>
          </div>
          <div className={clsx(classes.firstItem)} ref={myRef}>
            <p>
              A curated list of the most budget-friendly places in Saranda,
              Albania. This is a non-profit project created from volunteers. Our
              mission is to help visitors avoid tourist-traps and to reward
              small business owners, who don't inflect their prices during
              high-season.
            </p>
          </div>
        </div>
        <div className={classes.secondContainer}>
          <div className={classes.grid}>
            <div className={classes.itemContainer}>
              <div className={classes.textContainer}>
                <h2>Non-profit</h2>
                <p>
                  All the recommendations listed on this website are personal
                  favorite spots of locals. We don't accept any advertisement
                  and we recommend places based on the quality of theis service.
                </p>
              </div>
              <div className={classes.imageContainer}>
                <img src={Curated} alt="people drinking" />
              </div>
            </div>
            <div className={classes.itemContainer}>
              <div className={clsx(classes.textContainer, classes.second)}>
                <h2>Budget-friendly</h2>
                <p>
                  We always strive to list fairly-priced services. If a local
                  can't afford it, then you won't find it on this website.
                </p>
              </div>
              <div className={clsx(classes.imageContainer, classes.first)}>
                <img src={Budget} alt="sea food" />
              </div>
            </div>{' '}
            <div className={classes.itemContainer}>
              <div className={classes.textContainer}>
                <h2>Curated list</h2>
                <p>
                  We try to keep our list up to date and as short as possible.
                  We only recommend "hidden-gems" that can be hard to be found
                  with an easy google search.
                </p>
              </div>
              <div className={classes.imageContainer}>
                <img src={NonProfit} alt="girlfriends drinking" />
              </div>
            </div>
          </div>
          <div className={classes.actionWrapper}>
            <h1>Ready to get started?</h1>
            <p>
              Check out the local tips and enjoy Saranda as a local. Localguide
              will be your best friend.
            </p>
            <Link to={'/explore'}>
              <Button buttonStyle={'btn--main'}>Explore</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

interface AboutProps {
  myRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default AboutSection;
