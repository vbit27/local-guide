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
      <Typography color={'white'} gutterBottom variant={'body2'}>
        made with love
      </Typography>
      <div>
        <img src={HeartIcon} style={{ width: '15px', margin: '5px' }}></img>
      </div>
      <Typography color={'white'} gutterBottom variant={'body2'}>
        from vasil bituni
      </Typography>
    </Box>
  );
};

export default Footer;
