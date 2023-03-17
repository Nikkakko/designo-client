import { Link } from '@tanstack/react-router';
import React from 'react';
import styled from 'styled-components';

type LocationCardProps = {
  location: string;
  image: string;
  link: string;
};

const LocationCard = ({ location, image, link }: LocationCardProps) => {
  return (
    <AboutLocation>
      <LocationImageBox>
        <LocationImage src={image} alt={location} />
      </LocationImageBox>
      <LocationName>{location}</LocationName>
      <Link to={link as any}>
        <ViewLocation>View Location</ViewLocation>
      </Link>
    </AboutLocation>
  );
};

const AboutLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LocationImageBox = styled.div`
  width: 202px;
  height: 202px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.197569) 100%
  );
`;

const LocationImage = styled.img`
  width: 100%;
  height: 100%;
`;

const LocationName = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 5px;
  color: var(--darkText);
  text-transform: uppercase;
  margin-top: 48px;
  text-align: center;
`;

const ViewLocation = styled.button`
  text-decoration: none;
  padding: 18px;
  background-color: var(--tColor);
  color: var(--light);
  border-radius: 8px;
  border: none;
  margin-top: 32px;
  font-weight: 500;
  font-size: 15px;
  line-height: 21.68px;
  letter-spacing: 1px;
`;

export default LocationCard;
