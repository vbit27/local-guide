import { Box, Link, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import HeartIcon from '../../assets/images/heart.svg';

const Footer = () => {
  return (
    <Box
      bgcolor={'black'}
      style={{
        height: '5vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography color="#fff" gutterBottom variant={'body2'}>
        made with love
      </Typography>
      <div>
        <img
          src={HeartIcon}
          alt="heart icon"
          style={{ width: '15px', margin: '5px' }}
        ></img>
      </div>
      <Link
        color="#fff"
        href="https://github.com/vbit27"
        gutterBottom
        variant={'body2'}
        target="_blank"
      >
        vasil bituni
      </Link>
    </Box>
  );
};

export default Footer;
