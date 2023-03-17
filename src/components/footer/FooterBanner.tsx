import { useNavigate } from '@tanstack/react-router';
import React from 'react';
import styled from 'styled-components';
import { device } from '../../mediaQueries';
import { Button } from '../button';

const FooterBanner = () => {
  const navigate = useNavigate();

  return (
    <Banner>
      <Wrapper>
        <Content>
          <h1>Let's talk about your project</h1>
          <p>
            {' '}
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </Content>

        <Button
          text='Get in touch'
          bgColor='#FFFFFF'
          textColor='#333136'
          radius='8px'
          onClick={() =>
            navigate({
              to: '/contact',
            })
          }
          hoverColor='#FFAD9B'
        />
      </Wrapper>
    </Banner>
  );
};

const Banner = styled.div`
  position: absolute;
  background: var(--tColor);
  width: 327px;
  height: 379px;
  border-radius: 15px;
  // position banner 50% above the top of the footer
  top: 0;
  transform: translateY(-50%);

  //center the banner
  margin: auto;

  padding: 64px 24px;

  @media ${device.tablet} {
    width: 690px;
    height: 350px;
  }

  @media ${device.laptopL} {
    left: 0;
    right: 0;
    width: 77%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  h1 {
    font-weight: 500;
    font-size: 32px;
    line-height: 36px;
    /* or 112% */

    text-align: center;

    color: #ffffff;
  }

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    /* or 167% */

    text-align: center;

    color: #ffffff;
    margin-top: 6px;
  }

  @media ${device.tablet} {
    h1 {
      font-size: 40px;
      width: 335px;
    }
    p {
      font-size: 16px;
      width: 433px;
      margin-top: 19px;
    }
  }

  @media ${device.laptopL} {
    flex-direction: row;
    justify-content: space-between;
    padding: 72px 95px;

    h1,
    p {
      text-align: left;
    }
  }
`;

const Content = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

export default FooterBanner;
