import React, { useEffect, useState } from 'react';
import Map from '../../components/Map/Map';
import { CssBaseline, Grid, Switch } from '@mui/material';
import List from '../../components/List/List';
import {
  bars,
  restaurants,
  streetFood,
  usefulServices,
} from '../../data/places';
import { Header } from '../../components/Header/Header';

const Explore: React.FC = () => {
  const [places, setPlaces] = useState<Places[]>(restaurants);
  const [currentCategory, setCurrentCategory] = useState('restaurants');
  const [selectedMarker, setSelectedMarker] = useState<number | undefined>(
    undefined
  );
  const [showList, setShowList] = useState(true);
  const [showMap, setShowMap] = useState(true);

  // Update places variable with the data info
  const updatePlaces = (choice: string) => {
    setCurrentCategory(choice);

    if (choice === 'restaurants') {
      setPlaces(restaurants);
    } else if (choice === 'bars') {
      setPlaces(bars);
    } else if (choice === 'streetFood') {
      setPlaces(streetFood);
    } else if (choice === 'usefulServices') {
      setPlaces(usefulServices);
    }
  };

  // toggle between map and list view
  const handleChange = () => {
    setShowList(!showList);
    setShowMap(!showMap);
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
    window.scrollTo(0, 0);
  }, []);

  window.addEventListener('resize', checkWindowWidth);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          {showList ? (
            <List
              updatePlaces={(choice: string) => updatePlaces(choice)}
              places={places}
              selectedMarker={selectedMarker}
              handleChange={handleChange}
              currentCategory={currentCategory}
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
