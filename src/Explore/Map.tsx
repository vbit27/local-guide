import React, { useEffect, useState } from 'react';
import { MapStyle } from './MapStyle';
import GoogleMapReact from 'google-map-react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { restaurants } from '../data/places';

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

const Map = () => {
  const [selectedPlace, setSelectedPlace] = useState<Place | undefined>(
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
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.id}
            position={{
              lat: restaurant.location.lat,
              lng: restaurant.location.lng,
            }}
            onClick={() => {
              setSelectedPlace(restaurant);
              console.log(restaurant);
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

const plac = {
  address: 'Rruga Idriz Alidhima, Sarandë, Albania',
  phone_number: '+355 69 786 1816',
  name: 'Taverna Erjoni',
  rating: 4.4,
  price_level: 1,
  types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
  url: 'https://maps.google.com/?cid=8223485386262412288',
  id: 'ChIJnyzbtioVWxMRAHzJj2OwH3I',
  location: {
    lat: 39.8748685,
    lng: 19.988761,
  },
};

interface Place {
  address: string;
  phone_number?: string;
  name: string;
  rating?: number;
  price_level?: number;
  types: string[];
  url: string;
  id: string;
  location: {
    lat: number;
    lng: number;
  };
}

export default Map;
