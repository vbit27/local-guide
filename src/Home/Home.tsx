import classes from './Home.module.css';
import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import Button from '../shared/Button';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
};

export default Home;
