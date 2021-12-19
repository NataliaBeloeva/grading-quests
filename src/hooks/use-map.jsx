import {useEffect, useState} from 'react';
import {Map, TileLayer} from 'leaflet';

const centerCoords = {
  LAT: 59.968137,
  LNG: 30.316272,
  ZOOM: 16,
}

const useMap = (mapRef) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: centerCoords.LAT,
          lng: centerCoords.LNG,
        },
        zoom: centerCoords.ZOOM,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'},
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map]);

  return map;
}

export default useMap;
