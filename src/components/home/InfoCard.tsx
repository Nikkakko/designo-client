import React from 'react';
import styled from 'styled-components';
import { device } from '../../mediaQueries';

type InfoCardProps = {
  poster?: string;
  title: string;
  desc?: string;
};

const InfoCard = ({ poster, title, desc }: InfoCardProps) => {
  return (
    <InfoCardContainer>
      {poster && <InfoCardPoster src={poster} alt={title} />}
      <CardWrapper>
        <InfoCardTitle>{title}</InfoCardTitle>
        {desc && <InfoCardDescription>{desc}</InfoCardDescription>}
      </CardWrapper>
    </InfoCardContainer>
  );
};

const InfoCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
    column-gap: 48px;
  }

  @media ${device.laptopL} {
    flex-direction: column;
    row-gap: 48px;
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    align-items: start;
    row-gap: 16px;
  }

  @media ${device.laptopL} {
    width: 350px;
    align-items: center;
  }
`;

const InfoCardPoster = styled.img`
  width: 202px;
  height: 202px;
`;

const InfoCardTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--darkText);
  margin-top: 48px;

  @media ${device.tablet} {
    margin-top: 0;
  }

  @media ${device.laptopL} {
  }
`;

const InfoCardDescription = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: var(--darkText);
  text-align: center;
  margin-top: 32px;

  @media ${device.tablet} {
    text-align: start;
    margin-top: 0;
  }
`;

export default InfoCard;
