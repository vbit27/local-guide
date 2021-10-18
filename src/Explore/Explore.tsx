import React, { useState } from 'react';
import Map from './Map';
import { CssBaseline, Grid } from '@mui/material';
import List from './List';
import { bars, restaurants } from '../data/places';

const Home = () => {
  const [type, setType] = useState('restaurants');
  const [places, setPlaces] = useState<Places[]>(restaurants);

  // Update places variable with the data info
  const updatePlaces = (choice: string) => {
    setType(choice);
    if (choice === 'restaurants') {
      setPlaces(restaurants);
    } else if (choice === 'bars') {
      setPlaces(bars);
    }
  };

  return (
    <>
      <CssBaseline />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            updatePlaces={(choice: string) => updatePlaces(choice)}
            places={places}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map places={places} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
