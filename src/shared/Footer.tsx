import { Box, Typography } from '@mui/material';
import React from 'react';

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
        made with love @ vasil bituni
      </Typography>
    </Box>
  );
};

export default Footer;
