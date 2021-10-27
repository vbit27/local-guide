import React, { useEffect, useState } from 'react';
import Map from './Map';
import { CssBaseline, Grid, Switch } from '@mui/material';
import List from './List';
import { bars, restaurants } from '../data/places';
import { Header } from '../shared/Header';

const Explore: React.FC = () => {
  const [places, setPlaces] = useState<Places[]>(restaurants);
  const [selectedMarker, setSelectedMarker] = useState<number | undefined>(
    undefined
  );
  const [showList, setShowList] = useState(true);
  const [showMap, setShowMap] = useState(true);

  // Update places variable with the data info
  const updatePlaces = (choice: string) => {
    if (choice === 'restaurants') {
      setPlaces(restaurants);
    } else if (choice === 'bars') {
      setPlaces(bars);
    }
  };

  // toggle between map and list view
  const handleChange = () => {
    setShowList(!showList);
    setShowMap(!showMap);
    console.log({ showList });
  };

  const checkWindowWidth = () => {
    if (window.innerWidth < 900) {
      setShowMap(false);
    } else {
      setShowList(true);
      setShowMap(true);
    }
  };

  useEffect(() => {
    checkWindowWidth();
  }, []);

  window.addEventListener('resize', checkWindowWidth);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={5}>
          {showList ? (
            <List
              updatePlaces={(choice: string) => updatePlaces(choice)}
              places={places}
              selectedMarker={selectedMarker}
              handleChange={handleChange}
            />
          ) : null}
        </Grid>
        {showMap ? (
          <Grid item xs={12} md={7}>
            <Map
              places={places}
              setSelectedMarker={(index: number) => setSelectedMarker(index)}
              handleChange={handleChange}
            />
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};

export default Explore;
