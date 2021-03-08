import styled from 'styled-components';

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 96%;
  max-width: 970px;
  margin-bottom: 45px;
  border-bottom: 1px solid #c2c2c2;

  header {
    display: flex;
    align-items: center;
    width: 100%;

    margin-bottom: 1.2rem;

    >div {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      width: 100%;
      max-width: 300px;

      >a {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 70%;
        }
      }
    }
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    font-weight: bold;
    font-style: italic;
    width: 100%;
    margin-top: 1rem;

    @media (min-width: 800px) {
      font-size: 2rem;
    }
  }
`;
