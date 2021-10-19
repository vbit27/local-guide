import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { createRef, useEffect, useState } from 'react';
import PlaceCard from './PlaceCard';

const List: React.FC<ListProp> = ({ updatePlaces, places, selectedMarker }) => {
  const [elRefs, setElRefs] = useState<React.RefObject<HTMLDivElement>[]>([]);

  //create an array of refs
  useEffect(() => {
    setElRefs(
      Array(places?.length)
        .fill(undefined)
        .map((_, i) => createRef<HTMLDivElement>())
    );
  }, [places]);

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
      <Grid container spacing={3} style={{ height: '80vh', overflow: 'auto' }}>
        {places.map((place: Places, i) => (
          <Grid item xs={12} ref={elRefs[i]}>
            <PlaceCard
              place={place}
              key={place.id}
              refProp={elRefs[i]}
              selected={selectedMarker === i}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

interface ListProp {
  updatePlaces: (choice: string) => void;
  places: Places[];
  selectedMarker: number | undefined;
}

export default List;
