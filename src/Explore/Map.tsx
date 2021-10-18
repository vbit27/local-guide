import React, { useEffect, useState } from 'react';
import { MapStyle } from './MapStyle';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { restaurants, bars } from '../data/places';

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

const Map: React.FC<MapProp> = ({ places }) => {
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
        mapContainerStyle={{ height: '100vh', width: '100%' }}
        zoom={15}
        center={{
          lat: 39.8744907,
          lng: 19.9987613,
        }}
        options={options}
      >
        {places.map((place: Places) => (
          <Marker
            key={place.id}
            position={{
              lat: place.location.lat,
              lng: place.location.lng,
            }}
            onClick={() => {
              setSelectedPlace(place);
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
              <h5>{selectedPlace.name}</h5>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

interface MapProp {
  places: any;
}

export default Map;
