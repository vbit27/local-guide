import React from 'react';
import Map from './Map';
import { CssBaseline, Grid } from '@mui/material';
import Header from '../shared/Header';
import List from './List';

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
