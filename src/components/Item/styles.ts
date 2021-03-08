import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const FadeIn = keyframes`
  from{
    transform: translateY(-25px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #E2E2E222;

  text-align: center;
  font-size: 1.7rem;

  padding: 2px 0;
  border: 1px solid #000;
  border-radius: 12px;

  animation: ${FadeIn} 1.2s linear;
`;

export const ItemInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 94%;

  border-bottom: 1px solid #c2c2c2;
  margin-bottom: 14px;
  padding: 5px;

  >span {
    margin-bottom: 12px;

    &:first-child {
      margin-bottom: 15px;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin: 7px 0;
  border-bottom: 1px solid #c2c2c2;
  padding-bottom: 10px;

  img {
    width: 75%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  >button {
    text-align: center;
    background: #009900;
    padding: 5px;
    width: 80%;
    font-size: 1.4rem;
    transition: 0.7s;
    border-radius: 10px;

    &:hover {
      background: ${shade(0.3, '#009900')};
      font-size: 1.6rem;
      width: 90%;
    }
  }
`
