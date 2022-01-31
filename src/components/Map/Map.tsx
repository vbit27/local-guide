import React, { useState } from 'react';
import { MapStyle } from './MapStyle';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
} from '@mui/material';
import { bars } from '../../data/places';
import MediaQuery from 'react-responsive';

const style = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 39.872331,
  lng: 20.002352,
};

const options = {
  styles: MapStyle,
  zoomCotrol: true,
  disableDefaultUI: true,
};

const Map: React.FC<MapProp> = ({
  places,
  setSelectedMarker,
  handleChange,
}) => {
  const [selectedPlace, setSelectedPlace] = useState<Places | undefined>(
    undefined
  );

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!,
    libraries: ['places'],
  });

  if (loadError) return <div>'Error loading map'</div>;
  if (!isLoaded) return <div>Loading...'</div>;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={style}
        zoom={15}
        center={center}
        options={options}
      >
        <MediaQuery maxWidth={900}>
          <FormControlLabel
            control={<Switch defaultChecked onChange={handleChange} />}
            label="List View"
          />
        </MediaQuery>
        {places.map((place: Places, i: number) => (
          <Marker
            key={place.id}
            position={{
              lat: place.location.lat,
              lng: place.location.lng,
            }}
            onClick={() => {
              setSelectedPlace(place);
              setSelectedMarker(i);
            }}
            icon={{
              url: `../icons/${place.types[0]}-marker.svg`,
              scaledSize: new window.google.maps.Size(35, 35),
            }}
          />
        ))}

        {selectedPlace && (
          <InfoWindow
            position={{
              lat: selectedPlace.location.lat,
              lng: selectedPlace.location.lng,
            }}
            onCloseClick={() => setSelectedPlace(undefined)}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h4>{selectedPlace.name}</h4>
              {selectedPlace.price_level ? (
                <p> Price: {selectedPlace.price_level}</p>
              ) : null}
              <Button
                variant="text"
                size="small"
                onClick={() => window.open(selectedPlace.url, '_blank')}
              >
                Get Directions
              </Button>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

interface MapProp {
  places: Places[];
  setSelectedMarker: (index: number) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default Map;
