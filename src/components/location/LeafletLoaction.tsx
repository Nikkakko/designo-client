import styled from 'styled-components';
import {
  MapContainer,
  TileLayer,
  MapContainerProps,
  Marker,
  Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { device } from '../../mediaQueries';

interface LeafletLocationProps extends MapContainerProps {
  center: [number, number];
  popupText: string;
}

const LeafletLoaction = ({
  center,
  popupText,
  ...rest
}: LeafletLocationProps) => {
  return (
    <>
      <MapContainerStyled
        center={center}
        zoom={13}
        zoomControl={false}
        {...rest}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='
        https://tile.osm.ch/switzerland/{z}/{x}/{y}.png
        '
        />

        <Marker position={center}>
          <Popup>{popupText}</Popup>
        </Marker>
      </MapContainerStyled>
    </>
  );
};

const MapContainerStyled = styled(MapContainer)`
  width: 100%;
  height: 320px;
  @media ${device.tablet} {
  }

  @media ${device.laptopL} {
    width: 350px;
    height: 311px;
    border-radius: 15px;
  }
`;

const Container = styled.div`
  @media ${device.laptopL} {
    border-radius: 15px;
  }
`;

export default LeafletLoaction;
