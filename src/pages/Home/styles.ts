import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Main = styled.main`
 section {
   display: flex;
   flex-direction: column;
   padding: 0 5px;
 }
`;

export const OrderOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  div:first-child {
    margin-right: 6px;
  }
  margin-bottom: 8px;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
