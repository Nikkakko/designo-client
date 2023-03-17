import { Link } from '@tanstack/react-router';
import styled from 'styled-components';
import { Banner, Projects, InfoCard } from '../../components/home';
import { Passionate, Resourceful, Friendly } from '../../assets';
import { device } from '../../mediaQueries';

const Home = () => {
  const cardsData = [
    {
      poster: Passionate,
      title: 'Passionate',
      desc: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
    },
    {
      poster: Resourceful,
      title: 'Resourceful',
      desc: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
    },
    {
      poster: Friendly,
      title: 'Friendly',
      desc: 'We are a group of enthusiastic folks who know how to put people at ease. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
    },
  ];
  return (
    <Page>
      <Banner />
      <Wrapper>
        <Projects />
        <Infos>
          {cardsData.map(card => (
            <InfoCard
              poster={card.poster}
              title={card.title}
              desc={card.desc}
              key={card.title}
            />
          ))}
        </Infos>
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

const Wrapper = styled.div`
  width: 100%;
  padding: 0 24px;

  @media ${device.tablet} {
    padding: 0;
  }

  @media ${device.laptopL} {
  }
`;

const Infos = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  margin-top: 120px;
  margin-bottom: 310px;

  @media ${device.tablet} {
  }

  @media ${device.laptopL} {
    flex-direction: row;
  }
`;

export default Home;
