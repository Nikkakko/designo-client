import styled from 'styled-components';
import { Phone } from '../../assets';
import { device } from '../../mediaQueries';

const Banner = () => {
  return (
    <Main>
      <ContentWrapper>
        <BannerTitle>
          Award-winning custom designs and digital branding solutions
        </BannerTitle>
        <BannerDescription>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </BannerDescription>
        <Button>Learn More</Button>
      </ContentWrapper>
      <Circle />
      <Mobile src={Phone} />
    </Main>
  );
};

export default Banner;

const Main = styled.div`
  width: 100%;
  padding: 80px 24px 450px 24px;
  background-color: var(--tColor);
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media ${device.tablet} {
    border-radius: 15px;
  }

  @media ${device.laptopL} {
    flex-direction: row;
    padding: 145px 56px 145px 95px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  @media ${device.tablet} {
  }

  @media ${device.laptopL} {
    width: 80%;
    align-items: flex-start;
  }
`;

const BannerTitle = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  color: var(--light);
  text-align: center;
  margin-bottom: 14px;

  @media ${device.tablet} {
    font-size: 48px;
    line-height: 48px;
    width: 70%;
  }

  @media ${device.laptopL} {
    text-align: left;
  }
`;

const BannerDescription = styled.h2`
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: var(--light);
  text-align: center;

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 26px;
    width: 445px;
  }

  @media ${device.laptopL} {
    text-align: left;
  }
`;

const Button = styled.button`
  padding: 18px 24px;
  border-radius: 8px;
  background-color: var(--light);
  font-family: 'Jost', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 21.68px;
  letter-spacing: 1px;
  color: var(--darkText);
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 24px;

  @media ${device.tablet} {
    /* align-items: flex-start; */
  }

  @media ${device.laptopL} {
    &:hover {
      background: #ffad9b;
      border-radius: 8px;
      color: var(--light);
      transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
    }
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 640px;
  height: 640px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  opacity: 0.31;
  transform: matrix(0, -1, -1, 0, 0, 0);
  left: 0;
  top: 102px;

  @media ${device.tablet} {
    top: 120px;
    left: 200px;
  }

  @media ${device.laptopL} {
    top: 0;
    right: 0;
    left: auto;
  }
`;

const Mobile = styled.img`
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  bottom: -400px;

  @media ${device.tablet} {
    transform: translate(0);
    top: 0px;
    bottom: 0;
    right: -73px;
    left: auto;

    width: 100%;
    max-width: 540px;
    height: auto;
  }
`;
