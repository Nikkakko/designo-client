import { Link } from '@tanstack/react-router';
import styled, { css } from 'styled-components';
import { device } from '../../mediaQueries';
import { RightArrow } from '../../svg';

type PropsType = {
  title: string;
  image: string;
  to: string;
  tabletImage?: string;
  desktopImage?: string;
};

const Project: React.FC<PropsType> = ({
  title,
  image,
  to,
  tabletImage,
  desktopImage,
}) => {
  return (
    <Main image={image} tabletImage={tabletImage} desktopImage={desktopImage}>
      <ProjectTitle>{title}</ProjectTitle>
      <Link to='/design/$category' params={{ category: to }}>
        <ViewProject>
          <ViewProjectText>VIEW PROJECTS</ViewProjectText>
          <RightArrow />
        </ViewProject>
      </Link>
    </Main>
  );
};

export default Project;

const Main = styled.div(
  (props: {
    image: string;
    tabletImage: string | undefined;
    desktopImage: string | undefined;
  }) => css`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url(${props.image});
    position: relative;

    @media ${device.tablet} {
      background-image: url(${props.tabletImage});
      cursor: pointer;
    }

    @media ${device.laptopL} {
      background-image: url(${props.desktopImage});
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(
        0,
        0,
        0,
        0.5
      ); /* Change the opacity to adjust the overlay effect */
      z-index: 1; /* Set the z-index to make sure the overlay is on top of the background image */
      border-radius: 15px;
    }

    a {
      z-index: 2;
    }

    &:hover {
      &::before {
        background: #e7816b;
        mix-blend-mode: normal;
        opacity: 0.8;
        border-radius: 15px;
      }
    }
  `
);

const ProjectTitle = styled.h2`
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 1.4px;
  color: var(--light);
  text-transform: uppercase;
  z-index: 2;

  @media ${device.tablet} {
    font-size: 40px;
    margin-bottom: 24px;
  }

  @media ${device.laptopL} {
    text-align: center;
  }
`;

const ViewProject = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;

  @media ${device.tablet} {
  }

  @media ${device.laptopL} {
  }
`;

const ViewProjectText = styled.h3`
  font-weight: 500;
  font-size: 15px;
  line-height: 21.68px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--light);
  z-index: 2;
`;
