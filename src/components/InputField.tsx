import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { device } from '../mediaQueries';

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const InputField = ({ error, ...rest }: inputProps, ref: any) => {
  return (
    <>
      <Input {...rest} ref={ref} />
      {error && <Error>{error}</Error>}
    </>
  );
};

const Input = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  padding: 0px 0px 11px 13.77px;
  padding: ${props =>
    props.name === 'message' ? '0px 0px 75px 13.77px' : '0px 0px 11px 13.77px'};
  border-bottom: 1px solid #ffffff;
  color: #ffffff;
  mix-blend-mode: normal;

  &::placeholder {
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }

  @media ${device.tablet} {
    &:hover {
      cursor: pointer;
      border-bottom: 3px solid #ffffff;
    }
  }
`;

const Error = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  letter-spacing: -0.214286px;
  color: var(--cream);
`;

export default React.forwardRef(InputField);
