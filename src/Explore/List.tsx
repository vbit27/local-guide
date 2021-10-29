import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  Typography,
} from '@mui/material';
import { createRef, useEffect, useState } from 'react';
import PlaceCard from './PlaceCard';
import classes from './List.module.css';
import MediaQuery from 'react-responsive';

const List: React.FC<ListProp> = ({
  updatePlaces,
  places,
  selectedMarker,
  handleChange,
}) => {
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
      <Box
        style={{ display: 'flex', justifyContent: 'space-between' }}
        sx={{ typography: 'h5', m: 2, paddingTop: '1rem' }}
      >
        What are you looking for?
        <MediaQuery maxWidth={900}>
          <FormControlLabel
            control={<Switch defaultChecked onChange={handleChange} />}
            label="Map View"
          />
        </MediaQuery>
      </Box>
      <FormControl sx={{ m: 2, width: 300 }}>
        <Select
          defaultValue={'restaurants'}
          onChange={(e) => {
            updatePlaces(e.target.value);
          }}
        >
          <MenuItem value={'restaurants'}>Restaurants</MenuItem>
          <MenuItem value={'bars'}>Bars</MenuItem>
          <MenuItem value={'streetFood'}>Street Food</MenuItem>
          <MenuItem value={'usefulServices'}>Useful Sevices</MenuItem>
        </Select>
      </FormControl>
      <Grid
        container
        marginTop={2}
        spacing={7}
        style={{ height: '75vh', overflow: 'auto' }}
        className={classes.container}
      >
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
  handleChange: () => void;
}

export default List;
