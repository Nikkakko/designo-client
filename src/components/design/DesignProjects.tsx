import React from 'react';
import { ProjectType } from '../../types';
import Project from './ProjectItem';
import styled from 'styled-components';
import { device } from '../../mediaQueries';

type DesignProjectsProps = {
  projects: ProjectType[];
};

const DesignProjects = ({ projects }: DesignProjectsProps) => {
  return (
    <ProjectList>
      {projects.map(project => (
        <Project key={project._id} project={project} />
      ))}
    </ProjectList>
  );
};

const ProjectList = styled.ul`
  list-style: none;
  display: flex;

  flex-wrap: wrap;
  width: 100%;
  row-gap: 40px;
  margin-top: 96px;

  @media ${device.laptopL} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
    row-gap: 32px;
  }
`;

export default DesignProjects;
