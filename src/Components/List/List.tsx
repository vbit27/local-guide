import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import React from 'react';
import { restaurants } from '../Map/restaurants/restaurants';
import PlaceCard from '../PlaceCard/PlaceCard';

const places = [{ name: 'restaurants' }, { name: 'beers' }];

const List = () => {
  return (
    <div>
      <Typography variant={'h6'}>What are you looking for?</Typography>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>Type</InputLabel>
        <Select>
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
