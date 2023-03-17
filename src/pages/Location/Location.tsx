import styled from 'styled-components';
import Info from '../../components/shared/Info';
import {
  ImageMapAustralia,
  ImageMapUk,
  ImageMapCanada,
} from '../../assets/locations';

import {
  ImageMapAustraliaDesk,
  ImageMapUkDesk,
  ImageMapCanadaDesk,
} from '../../assets/locations/desktop';
import { LocationInfo } from '../../components/location';
import LeafletLoaction from '../../components/location/LeafletLoaction';
import { device } from '../../mediaQueries';

const Location = () => {
  return (
    <Page>
      <LocationContainer>
        <LeafletLoaction
          center={[43.6440119161492, -79.39452954110726]}
          popupText='Designo Central Office'
        />
        <LocationInfo
          title='Canada'
          office='Designo Central Office'
          address='3886 Wellington Street'
          city='Toronto, Ontario M9C 3J5'
          contact='Contact'
          phone='+1 253-863-8967'
          m='contact@designo.co'
          titleColor='var(--tColor)'
          textColor='var(--darkText)'
        />
      </LocationContainer>
      <LocationContainer>
        <LeafletLoaction
          center={[-30.324016171027637, 149.78524272987715]}
          popupText='Designo AU Office'
        />

        <LocationInfo
          title='Australia'
          office='Designo AU Office'
          address='19 Balonne Street'
          city='New South Wales 2443'
          contact='Contact'
          phone='+61 253-863-8967'
          m='contact@designo.au'
          titleColor='var(--tColor)'
          textColor='var(--darkText)'
        />
      </LocationContainer>
      <LocationContainer position>
        <LeafletLoaction
          center={[53.71028038302087, -1.3420442363270915]}
          popupText='Designo UK Office'
        />

        <LocationInfo
          title='United Kingdom'
          office='Designo UK Office'
          address='13 Colorado Way'
          city='Rhyd-y-fro SA8 9GA'
          contact='Contact'
          phone='+44 253-863-8967'
          m='contact@designo.uk'
          titleColor='var(--tColor)'
          textColor='var(--darkText)'
        />
      </LocationContainer>
    </Page>
  );
};

const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    padding: 0 39px;
  }

  @media ${device.laptopL} {
    padding: 0 165px;
  }
`;

const LocationContainer = styled.div<{ position?: boolean }>`
  width: 100%;
  text-align: center;
  margin-bottom: ${({ position }) => (position ? '309.5px' : '40px')};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    margin-bottom: ${({ position }) => (position ? '309.5px' : '120px')};
    /* border-radius: 15px; */
    overflow: hidden;
  }

  @media ${device.laptopL} {
    // flex row reverse on every other container
    flex-direction: row;
    margin-bottom: ${({ position }) => (position ? '309.5px' : '32px')};
    gap: 32px;

    &:nth-child(odd) {
      flex-direction: row-reverse;
    }

    align-items: center;
  }
`;

export default Location;
