import { useParams } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCategoryProjects } from '../../axios';
import { ProjectType } from '../../types';
import DesignProjects from '../../components/design/DesignProjects';
import Project from '../../components/shared/Project';
import {
  AppDesignDesktop,
  AppDesignMobile,
  GraphicDesignMobile,
  WebDesignMobile,
  GraphicDesignDesktop,
  WebDesignDesktopSmall,
} from '../../assets';

import { device } from '../../mediaQueries';
import {
  AppDesignTablet,
  GraphicDesignTablet,
  WebDesignTablet,
} from '../../assets/home/tablet';
import Loader from '../../components/Loader';

const Design = () => {
  const { category } = useParams();
  const [data, setData] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getCategoryProjects(category as string);
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [category]);

  if (loading) return <Loader />;

  const bannerDescription =
    category === 'web'
      ? 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
      : category === 'app'
      ? 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
      : category === 'graphic'
      ? 'We deliver eye-catching branding materials that are tailored to meet your business objectives.'
      : null;
  return (
    <Page>
      <Banner>
        <BannerTitle>{category} Design</BannerTitle>
        <BannerDescription>{bannerDescription}</BannerDescription>
      </Banner>
      <Wrapper>
        {data.length > 0 ? <DesignProjects projects={data} /> : null}
        <ProjectsLinks>
          {category !== 'web' ? (
            <Project
              title='WEB DESIGN'
              image={WebDesignMobile}
              to='web'
              tabletImage={WebDesignTablet}
              desktopImage={WebDesignDesktopSmall}
            />
          ) : null}
          {category !== 'app' ? (
            <Project
              title='APP DESIGN'
              image={AppDesignMobile}
              to='app'
              tabletImage={AppDesignTablet}
              desktopImage={AppDesignDesktop}
            />
          ) : null}
          {category !== 'graphic' ? (
            <Project
              title='GRAPHIC DESIGN'
              image={GraphicDesignMobile}
              tabletImage={GraphicDesignTablet}
              desktopImage={GraphicDesignDesktop}
              to='graphic'
            />
          ) : null}
        </ProjectsLinks>
      </Wrapper>
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

const Banner = styled.div`
  width: 100%;
  height: 320px;
  padding: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--tColor);

  @media ${device.tablet} {
    border-radius: 15px;
  }
`;

const BannerTitle = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  color: var(--light);
  text-align: center;

  text-transform: capitalize;

  @media ${device.tablet} {
    font-size: 48px;
  }

  @media ${device.laptopL} {
    font-size: 48px;
    line-height: 48px;
  }
`;

const BannerDescription = styled.h2`
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: var(--light);
  text-align: center;
  margin-top: 24px;

  @media ${device.tablet} {
    font-size: 16px;
    width: 60%;
  }

  @media ${device.laptopL} {
    width: 30%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 24px;

  @media ${device.tablet} {
    padding: 0;
    margin-bottom: 255px;
  }
`;

const ProjectsLinks = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin-top: 96px;

  @media ${device.tablet} {
  }

  @media ${device.laptopL} {
    flex-direction: row !important;
    gap: 30px;
  }
`;
export default Design;
