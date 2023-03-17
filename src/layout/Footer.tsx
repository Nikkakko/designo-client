import styled from 'styled-components';
import { FooterBanner } from '../components/footer';
import { LogoLight } from '../assets';
import { Link, useRouter } from '@tanstack/react-router';
import { Facebook, Youtube, Pinterest, Instagram, Twitter } from '../svg';
import { device } from '../mediaQueries';

const Footer = () => {
  const router = useRouter();
  const location = router.history.location.pathname.split('/')[1];

  const Links = [
    {
      title: 'Our Company',
      path: '/about',
    },
    {
      title: 'Locations',
      path: '/location',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <FooterContainer>
      {location !== 'contact' && <FooterBanner />}

      <Wrapper location={location}>
        <Info>
          <LogoImage src={LogoLight} alt='Logo' />
          <Line />
          <LinksContainer>
            {Links.map(link => (
              <Link key={link.title} to={link.path as any}>
                {link.title}
              </Link>
            ))}
          </LinksContainer>
        </Info>
        <TabletLine />
        <ContactWrapper>
          <ContactInfo>
            <Central>
              <h3>Designo Central Office</h3>
              <p> 3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </Central>
            <ContactUs>
              <h3>Contact Us (Central Office)</h3>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co </p>
            </ContactUs>
          </ContactInfo>

          <SocialIcons>
            <Facebook />
            <Youtube />
            <Twitter />
            <Pinterest />
            <Instagram />
          </SocialIcons>
        </ContactWrapper>
      </Wrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: relative;
  background-color: var(--dark);
  padding: 64px 24px;
  width: 100%;

  @media ${device.tablet} {
    padding: 64px 39px;
  }

  @media ${device.laptopL} {
    padding: 64px 165px;
  }
`;

const Wrapper = styled.div<{ location: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${props => (props.location === 'contact' ? '0' : '189px')};

  @media ${device.tablet} {
    /* flex-direction: row; */
  }
`;

const Info = styled.div`
  @media ${device.tablet} {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 41px;
  }
`;

const Line = styled.div`
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.1;
  width: 100%;
  height: 1px;

  @media ${device.tablet} {
    display: none;
  }
`;

const TabletLine = styled(Line)`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-top: 32px;

  a {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #ffffff;

    cursor: pointer;
  }

  @media ${device.tablet} {
    flex-direction: row;
    margin-top: 0;
  }
`;

const ContactWrapper = styled.div`
  @media ${device.tablet} {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

const ContactInfo = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  align-items: center;

  h3,
  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    /* or 162% */

    text-align: center;

    color: #ffffff;

    mix-blend-mode: normal;
    opacity: 0.5;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.5px;
    /* or 162% */
  }

  @media ${device.tablet} {
    flex-direction: row;
    h3,
    p {
      text-align: left;
    }
  }
`;

const Central = styled.div``;

const ContactUs = styled.div``;

const LogoImage = styled.img`
  width: 202px;
  height: 27px;
  margin-bottom: 32px;

  @media ${device.tablet} {
    margin-bottom: 0;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  gap: 16px;

  @media ${device.tablet} {
    align-items: flex-end;
  }
`;

export default Footer;
