import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

// write type for button
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  bgColor: string;
  textColor: string;
  radius?: string;
  submitType?: boolean;
  hoverColor?: string;
}

const Button = ({
  text,
  bgColor,
  textColor,
  radius,
  submitType,
  hoverColor,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      submitType={submitType}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: radius,
      }}
      hoverColor={hoverColor}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  submitType?: boolean;
  hoverColor?: string | undefined;
}>`
  border: none;
  padding: ${props => (props.submitType ? '18px 48px' : '17px 19px')};

  margin-top: 32px;
  /* Font */
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */
  letter-spacing: 1px;
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    background-color: ${props => props.hoverColor} !important;
    color: #fff !important;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
  }
`;
export default Button;
