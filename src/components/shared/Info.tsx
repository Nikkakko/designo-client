import styled, { css } from 'styled-components';
import { device } from '../../mediaQueries';

type PropsType = {
  title: string;
  description: string;
  titleColor?: string;
  descriptionColor?: string;
  part1?: string;
};

const Info = ({
  title,
  description,
  titleColor,
  descriptionColor,
  part1,
}: PropsType) => {
  return (
    <Container>
      <AboutTitle titleColor={titleColor}>{title}</AboutTitle>
      <AboutDescription descriptionColor={descriptionColor}>
        {description}
      </AboutDescription>
      {part1 && (
        <Part1
          style={{
            marginTop: '24px',
          }}
        >
          {part1}
        </Part1>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  @media ${device.tablet} {
  }

  @media ${device.laptopL} {
    padding: 0 95px;

    h1,
    p {
      text-align: left;
    }
  }
`;

const AboutTitle = styled.h1(
  (props: { titleColor?: string }) => css`
    font-weight: 500;
    font-size: 32px;
    line-height: 36px;
    color: ${props.titleColor ? props.titleColor : 'var(--light)'};
    text-align: center;
    text-transform: capitalize;
    margin-top: 80px;

    @media ${device.tablet} {
      font-size: 40px;
      line-height: 48px;
    }

    @media ${device.laptopL} {
      margin-top: 0px;
    }
  `
);

const AboutDescription = styled.p(
  (props: { descriptionColor?: string }) => css`
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: ${props.descriptionColor ? props.descriptionColor : 'var(--light)'};
    text-align: center;
    margin-top: 24px;
    padding: 0 24px;

    @media ${device.tablet} {
      font-size: 16px;
      line-height: 26px;
    }

    @media ${device.laptopL} {
      padding: 0;
      margin-top: 32px;
    }
  `
);

const Part1 = styled(AboutDescription)`
  color: var(--darkText);
`;

export default Info;
