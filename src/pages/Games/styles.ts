import { shade } from 'polished';
import styled from 'styled-components';

export const GamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Main = styled.main`
  >section {
    display: flex;
    flex-direction: column;
    padding: 0 6px 10px 6px;
  }
`;

export const OrderOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: bold;
  border: 1px solid #000;
  border-top: 0;
  padding: 10px;

  div:first-child {
    margin-right: 6px;

    @media(min-width: 800px) {
      display: flex;
      flex-direction: row;
    }
  }
  margin-bottom: 15px;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media(min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProductsOnCart = styled.section`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  min-width: fit-content;
  max-width: 500px;
  width: 100%;
  height: 90%;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  position: fixed;
  right: 2px;
  top: 68px;
  z-index: 2;

  font-size: 1.8rem;
  color: #000;

  background-color: #d2d2d2;
  transition: display 2s ease-in-out;

  >div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    margin-top: 5px;

    &:first-child {
      height: 100%;
    }
  }

  a {
    text-decoration: none;
    color: #FFF;
    font-weight: bold;
    background: #009900;
    padding: 5px;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    border-radius: 10px;

    &:hover {
      background: ${shade(0.3, '#009900')};
      font-size: 2.2rem;
      width: 90%;
    }
  }

  @media(min-width: 768px) {
    width: 100%;
  }
`;

export const CartContainer = styled.article`
  display: block;
  position: fixed;
  right: 15px;
  top: 30px;
  z-index: 3;

  button {
    width: 45px;

    img {
      width: 100%;
    }
  }
`;
