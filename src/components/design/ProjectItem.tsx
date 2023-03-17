import styled from 'styled-components';
import { ProjectType } from '../../types';
import { BASE_URL } from '../../constants';
import { device } from '../../mediaQueries';

const Project: React.FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <ProjectItem>
      <Poster src={`${BASE_URL}${project.image}`} />
      <Wrapper>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
      </Wrapper>
    </ProjectItem>
  );
};

const Poster = styled.img`
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  @media ${device.tablet} {
    width: 50%;
    border-top-right-radius: 0;
  }

  @media ${device.laptopL} {
    width: 100%;
  }
`;

const ProjectItem = styled.li`
  width: 100%;
  border-radius: 15px;
  background-color: var(--cream);

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;

    &:hover {
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
      background: #e7816b;
      border-radius: 15px;
      cursor: pointer;

      h2,
      p {
        color: var(--light);
      }
    }
  }

  @media ${device.laptopL} {
    width: 100%;
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 32px 30px;
  text-align: center;
`;

const ProjectTitle = styled.h2`
  font-weight: 500px;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 5px;
  color: var(--tColor);
  text-transform: uppercase;

  @media ${device.tablet} {
  }

  @media ${device.laptopL} {
  }
`;

const ProjectDescription = styled.p`
  font-weight: 400px;
  font-size: 16px;
  line-height: 26px;
  color: var(--darkText);
  margin-top: 16px;
`;
export default Project;
