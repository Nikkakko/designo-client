import { Link, useNavigate } from '@tanstack/react-router';
import styled from 'styled-components';
import {
  AustraliaLocation,
  CanadaLocation,
  UkLocation,
  DealMobile,
  WorldTalentMobile,
} from '../../assets';
import { WorldTalentDesktop, DealDesktop } from '../../assets/about/desktop';
import { DealTablet, WorldTalentTablet } from '../../assets/about/tablet';

import { AboutHeader } from '../../components/about';
import { LocationCard } from '../../components/location';
import Info from '../../components/shared/Info';
import { device } from '../../mediaQueries';

const About = () => {
  return (
    <Page>
      <AboutHeader />
      <TalentContainer>
        <PosterImg />
        <Info
          title='World-class talent'
          description='We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
          '
          part1='Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.'
          titleColor='var(--tColor)'
          descriptionColor='var(--darkText)'
        />
      </TalentContainer>
      <AboutLocations>
        <LocationCard
          location='Canada'
          image={CanadaLocation}
          link='/location'
        />

        <LocationCard
          location='Australia'
          image={AustraliaLocation}
          link='/location'
        />

        <LocationCard
          location='United Kingdom'
          image={UkLocation}
          link='/location'
        />
      </AboutLocations>

      <TalentContainer position>
        <PosterRealDeal />
        <Info
          title='The real deal'
          description='As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.'
          part1='We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.'
          titleColor='var(--tColor)'
          descriptionColor='var(--darkText)'
        />
      </TalentContainer>
    </Page>
  );
};

const Page = styled.main`
  width: 100%;

  @media ${device.tablet} {
    padding: 0 39px;
  }

  @media ${device.laptopL} {
    padding: 0 165px;
  }
`;

const TalentContainer = styled.div<{ position?: boolean }>`
  width: 100%;
  text-align: center;
  background-color: var(--cream);
  padding-bottom: 80px;

  margin-bottom: ${({ position }) => (position ? '309.5px' : '0')};

  @media ${device.tablet} {
    margin-top: 120px;
  }

  @media ${device.laptopL} {
    display: flex;
    padding: 0;
    align-items: center;
  }
`;

const PosterImg = styled.div`
  width: 100%;
  height: 320px;
  background-image: url(${WorldTalentMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  border-radius: 15px 15px 0 0;

  @media ${device.tablet} {
    background-image: url(${WorldTalentTablet});
  }

  @media ${device.laptopL} {
    background-image: url(${WorldTalentDesktop});
    height: 476px;
    border-radius: 0;
  }
`;

const PosterRealDeal = styled(PosterImg)`
  background-image: url(${DealMobile});

  @media ${device.tablet} {
    background-image: url(${DealTablet});
  }

  @media ${device.laptopL} {
    background-image: url(${DealDesktop});
  }
`;

const AboutLocations = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 48px;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  margin-bottom: 120px;

  @media ${device.tablet} {
  }

  @media ${device.laptopL} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default About;
