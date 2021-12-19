import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from 'hooks/use-map';
import placemarkUrl from 'assets/img/icon-blip.svg';

const placemarkIconSize = {
  WIDTH: 56,
  HEIGHT: 70,
};

const placemarkIcon = new Icon({
  iconUrl: placemarkUrl,
  iconSize: [placemarkIconSize.WIDTH, placemarkIconSize.HEIGHT],
  iconAnchor: [placemarkIconSize.WIDTH / 2, placemarkIconSize.HEIGHT],
});

const placemarkCoords = {
  LAT: 59.968137,
  LNG: 30.316272,
}

const Map = () => {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map) {
      const placemark = new Marker({
        lat: placemarkCoords.LAT,
        lng: placemarkCoords.LNG,
      });

      placemark.setIcon(placemarkIcon).addTo(map);
    }
  }, [map]);

  return (
    <div ref={mapRef} style={{height: '100%', width: '100%'}}></div>
  );
}

export default Map;
