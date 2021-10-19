import React, { useState } from 'react';
import { MapStyle } from './MapStyle';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { Button } from '@mui/material';
import { bars } from '../data/places';

const style = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 39.8744907,
  lng: 19.9987613,
};

const options = {
  styles: MapStyle,
  zoomCotrol: true,
  // disableDefaultUI: true,
};

const Map: React.FC<MapProp> = ({ places, setSelectedMarker }) => {
  const [selectedPlace, setSelectedPlace] = useState<Places | undefined>(
    undefined
  );

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!,
  });

  if (loadError) return <div>'Error loading map'</div>;
  if (!isLoaded) return <div>Loading...'</div>;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={{ height: '93vh', width: '100%' }}
        zoom={15}
        center={{
          lat: 39.8744907,
          lng: 19.9987613,
        }}
        options={options}
      >
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
              url: `../icons/${place.types[0]}.svg`,
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
            <div>
              <h4 style={{ display: 'flex', justifyContent: 'space-around' }}>
                {selectedPlace.name}
              </h4>
              {selectedPlace.types ? <p>{selectedPlace.types[0]}</p> : null}

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
}

export default Map;
