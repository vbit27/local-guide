import React, { createRef, useEffect, useState } from 'react';
import Map from './Map';
import { CssBaseline, Grid } from '@mui/material';
import List from './List';
import { bars, restaurants } from '../data/places';

const Home = () => {
  const [places, setPlaces] = useState<Places[]>(restaurants);
  const [selectedMarker, setSelectedMarker] = useState<number | undefined>(
    undefined
  );

  // Update places variable with the data info
  const updatePlaces = (choice: string) => {
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
            selectedMarker={selectedMarker}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            places={places}
            setSelectedMarker={(index: number) => setSelectedMarker(index)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
