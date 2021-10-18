import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { restaurants } from '../data/places';
import PlaceCard from './PlaceCard';

const places = [{ name: 'restaurants' }, { name: 'beers' }];

const List: React.FC = () => {
  const [type, setType] = useState('restaurants');

  return (
    <div>
      <Typography variant={'h6'}>What are you looking for?</Typography>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>Type</InputLabel>
        <Select
          defaultValue={'restaurants'}
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value={'restaurants'}>Restaurants</MenuItem>
          <MenuItem value={'bars'}>Bars</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3}>
        {places.map((place) => (
          <Grid item xs={12}>
            <Typography variant={'h5'}> {place.name}</Typography>
            <PlaceCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
