import clsx from 'clsx';
import React from 'react';
import classes from './AboutSection.module.css';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const AboutSection: React.FC<AboutProps> = ({ myRef }) => {
  return (
    <>
      <div className={classes.container} ref={myRef}>
        <div className={classes.grid}>
          <div className={clsx(classes.itemContainer)}>
            <h1>What is localguide</h1>
          </div>
          <div className={clsx(classes.itemContainer)}>
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
          <div className={clsx(classes.itemContainer)}>
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
