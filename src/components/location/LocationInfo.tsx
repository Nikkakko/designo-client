import styled, { css } from 'styled-components';
import { device } from '../../mediaQueries';

type LocationCardProps = {
  title: string;
  office: string;
  address: string;
  city: string;
  contact: string;
  phone: string;
  m: string;
  titleColor?: string;
  textColor?: string;
};
const LocationCard = ({
  title,
  office,
  address,
  city,
  contact,
  phone,
  m,
  titleColor,
  textColor,
}: LocationCardProps) => {
  return (
    <Container>
      <LocationTitle titleColor={titleColor}>{title}</LocationTitle>
      <Wrapper>
        <LocationInfo>
          <LocationOffice>{office}</LocationOffice>
          <LocationAddress>{address}</LocationAddress>
          <LocationCity>{city}</LocationCity>
        </LocationInfo>

        <LocationInfo>
          <LocationContact>{contact}</LocationContact>
          <LocationPhone>{phone}</LocationPhone>
          <LocationMail>{m}</LocationMail>
        </LocationInfo>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--cream);

  @media ${device.tablet} {
    padding: 88px 75px 0px 75px;
    align-items: flex-start;
    margin-top: 31px;
    border-radius: 15px;
  }

  @media ${device.laptopL} {
    padding: 88px 95px;
    margin-top: 0;
  }
`;

const Wrapper = styled.div`
  @media ${device.tablet} {
    width: 100%;
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
  }
`;

const LocationTitle = styled.h1(
  (props: { titleColor?: string }) => css`
    font-weight: 500;
    font-size: 32px;
    line-height: 36px;
    color: ${props.titleColor ? props.titleColor : 'var(--light)'};
    text-align: center;
    text-transform: capitalize;
    margin-top: 80px;

    @media ${device.tablet} {
      margin-top: 0;
      text-align: start;
    }
  `
);

const LocationInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;

  h2,
  p {
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    /* or 167% */

    text-align: center;

    color: #333136;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }

  @media ${device.tablet} {
    align-items: flex-start;
    h2,
    p {
      text-align: start;
    }
  }
`;

const LocationOffice = styled.h2``;

const LocationAddress = styled.p``;

const LocationCity = styled.p``;

const LocationContact = styled.h2``;

const LocationPhone = styled.p``;

const LocationMail = styled.p``;

export default LocationCard;
