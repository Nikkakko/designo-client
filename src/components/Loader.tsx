import styled from 'styled-components';

const Loader = () => {
  return (
    <Wrapper>
      <SimpleLoader />
    </Wrapper>
  );
};

//simple Spinnder loader component
const Wrapper = styled.div`
  //center the loader

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SimpleLoader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  margin: 0 auto;
  margin-top: 100px;
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
