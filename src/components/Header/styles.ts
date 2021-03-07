import styled from 'styled-components';

export const Head = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 96%;
  max-width: 962px;

  border-bottom: 1px solid #c2c2c2;
  margin-bottom: 1.2rem;
  padding-bottom: 1rem;

  >div {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 300px;

    img {
      width: 100%;
    }
  }


  >h1 {
    font-size: 1.7rem;
    font-weight: bold;
    font-style: italic;

    margin-top: 1rem;
  }
`;
