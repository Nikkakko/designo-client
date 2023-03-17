import styled from 'styled-components';
import {
  GraphicDesignMobile,
  AppDesignMobile,
  WebDesignMobile,
  GraphicDesignDesktop,
  AppDesignDesktop,
  WebDesignDesktop,
} from '../../assets';
import {
  GraphicDesignTablet,
  AppDesignTablet,
  WebDesignTablet,
} from '../../assets/home/tablet';

import { device } from '../../mediaQueries';

import Project from '../shared/Project';

const Projects = () => {
  return (
    <Main>
      <Project
        title='WEB DESIGN'
        image={WebDesignMobile}
        to='/web'
        tabletImage={WebDesignTablet}
        desktopImage={WebDesignDesktop}
      />

      <DesktopWrapper>
        <Project
          title='APP DESIGN'
          image={AppDesignMobile}
          to='/app'
          tabletImage={AppDesignTablet}
          desktopImage={AppDesignDesktop}
        />
        <Project
          title='GRAPHIC DESIGN'
          image={GraphicDesignMobile}
          tabletImage={GraphicDesignTablet}
          desktopImage={GraphicDesignDesktop}
          to='/graphic'
        />
      </DesktopWrapper>
    </Main>
  );
};

export default Projects;

const Main = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  row-gap: 24px;
  margin-top: 120px;

  @media ${device.laptopL} {
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;

    & > div {
      &:first-child {
        height: 100%;
      }
    }
  }
`;

const DesktopWrapper = styled.div`
  /* display: none; */
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  @media ${device.laptopL} {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }
`;
