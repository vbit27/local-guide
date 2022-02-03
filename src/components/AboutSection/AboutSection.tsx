import clsx from 'clsx';
import React from 'react';
import classes from './AboutSection.module.css';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import World from '../../assets/images/world.jpeg';

const AboutSection: React.FC<AboutProps> = ({ myRef }) => {
  return (
    <>
      <div className={classes.container} ref={myRef}>
        <div className={classes.firstGrid}>
          <div className={clsx(classes.firstItem)}>
            <h1>What is localguide</h1>
          </div>
          <div className={clsx(classes.firstItem)}>
            <p>
              Local Guide is a collection of favorite and cosy places locals in
              Saranda like to spend their time to. The recommendations are
              gathered from a group of friends from different backgrounds and
              who have pretty different tastes. This made it possible to create
              a very curated list, which can accommodate even the hardest ones
              to please.
              <br />
              <br />
              We constantly update our list and we are always in search of new
              locally owned business which don't break the bank, but also offer
              amazing service.
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
                  and we recommend places based only on quality.
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
                  We always strive to list fairly-priced services. If a local
                  can't afford it, then you won't find it on this website.
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
                  We try to keep our list updated and as small as possible. We
                  only recommend "hidden-gems" that can be hard to be found with
                  an easy google search
                </p>
              </div>
              <div className={classes.imageContainer}>
                <img src={World} alt="map" />
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
