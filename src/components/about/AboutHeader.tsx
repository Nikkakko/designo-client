import styled from 'styled-components';
import { AboutHeroMobile } from '../../assets';
import { AboutHeroDesktop } from '../../assets/about/desktop';
import { AboutHeroTablet } from '../../assets/about/tablet';
import { device } from '../../mediaQueries';

import Info from '../shared/Info';

const AboutHeader = () => {
  return (
    <AboutBanner>
      <PosterImg />
      <Info
        title='about as'
        description='Founded in 2010, we are a creative agency that produces lasting results
    for our clients. We’ve partnered with many startups, corporations, and
    nonprofits alike to craft designs that make real impact. We’re always
    looking forward to creating brands, products, and digital experiences
    that connect with our clients’ audiences.'
      />
    </AboutBanner>
  );
};

export default AboutHeader;

const AboutBanner = styled.div`
  width: 100%;
  text-align: center;
  background-color: var(--tColor);
  padding-bottom: 80px;

  @media ${device.tablet} {
    border-radius: 15px 15px 0 0;
    overflow: hidden;
  }

  @media ${device.laptopL} {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 0;
  }
`;

const PosterImg = styled.div`
  width: 100%;
  height: 320px;
  background-image: url(${AboutHeroMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media ${device.tablet} {
    background-image: url(${AboutHeroTablet});
  }

  @media ${device.laptopL} {
    height: 480px;
    background-image: url(${AboutHeroDesktop});
  }
`;
