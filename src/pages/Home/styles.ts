import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Main = styled.main`

`;

export const ItemName = styled.div`
  display: grid;
  grid-template-areas: 'select name price score';

  strong {
    text-align: center;
    border: 1px solid #000;
    border-collapse: collapse;
  }

  .name {
    grid-area: name;
  }

  .price {
    grid-area: price;
  }

  .score {
    grid-area: score;
  }
`;
