import React, { useEffect, useState } from 'react';
import Map from './Map';
import { CssBaseline, Grid, Switch } from '@mui/material';
import List from './List';
import { bars, restaurants } from '../data/places';
import { Header } from '../shared/Header';
import MediaQuery from 'react-responsive';

const Explore: React.FC = () => {
  const [places, setPlaces] = useState<Places[]>(restaurants);
  const [selectedMarker, setSelectedMarker] = useState<number | undefined>(
    undefined
  );
  const [showList, setShowList] = useState(true);
  const [showToggleBtn, setShowToggleBtn] = useState(false);

  // Update places variable with the data info
  const updatePlaces = (choice: string) => {
    if (choice === 'restaurants') {
      setPlaces(restaurants);
    } else if (choice === 'bars') {
      setPlaces(bars);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowList(event.target.checked);
    console.log({ showList });
  };

  const showButton = () => {
    if (window.innerWidth < 900) {
      setShowToggleBtn(true);
    } else setShowToggleBtn(false);
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
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
              showList={showList}
              handleChange={handleChange}
            />
          ) : null}
        </Grid>

        {showList ? null : (
          <Grid item xs={12} md={7}>
            <Map
              places={places}
              setSelectedMarker={(index: number) => setSelectedMarker(index)}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Explore;
