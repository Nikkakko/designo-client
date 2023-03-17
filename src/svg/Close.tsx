import styled from 'styled-components';
import { device } from '../mediaQueries';
const Close: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <CloseStyled
      onClick={onClick}
      width='20'
      height='20'
      xmlns='http://www.w3.org/2000/svg'
      style={{
        cursor: 'pointer',
      }}
    >
      <path
        d='M17.071.1L19.9 2.93l-7.071 7.07 7.071 7.072-2.828 2.828L10 12.828l-7.071 7.071L.1 17.071 7.17 10 .102 2.929 2.929.1l7.07 7.07 7.072-7.07z'
        fill='#1D1C1E'
        fillRule='evenodd'
      />
    </CloseStyled>
  );
};

const CloseStyled = styled.svg`
  @media ${device.tablet} {
    display: none;
  }
`;

export default Close;
