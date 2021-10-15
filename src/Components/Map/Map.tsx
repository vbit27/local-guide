import React, { useEffect } from 'react';
import { MapStyle } from './MapStyle';
import GoogleMapReact from 'google-map-react';
import { getData } from '../api/index';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

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
  disableDefaultUI: true,
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!,
    libraries: ['places'],
  });

  useEffect(() => {
    getData();
  }, []);

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
      ></GoogleMap>
    </div>
  );
};

export default Map;
