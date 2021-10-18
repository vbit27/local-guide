import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { restaurants, bars } from '../data/places';
import PlaceCard from './PlaceCard';

const List: React.FC<ListProp> = ({ updatePlaces, places }) => {
  return (
    <div>
      <Typography variant={'h6'}>What are you looking for?</Typography>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>Type</InputLabel>
        <Select
          defaultValue={'restaurants'}
          onChange={(e) => {
            updatePlaces(e.target.value);
          }}
        >
          <MenuItem value={'restaurants'}>Restaurants</MenuItem>
          <MenuItem value={'bars'}>Bars</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3}>
        {places.map((place: any) => (
          <Grid item xs={12}>
            <Typography variant={'h5'}> {place.name}</Typography>
            <PlaceCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

interface ListProp {
  updatePlaces: (choice: string) => void;
  places: Places[];
}

export default List;
