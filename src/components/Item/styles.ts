import styled, { keyframes } from 'styled-components';

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

  text-align: center;
  font-size: 1.4rem;

  margin: 10px;
  padding: 2px 0;
  border: 1px solid #000;

  animation: ${FadeIn} 1.2s linear;
`;

export const ItemInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 94%;

  border-bottom: 1px solid #c2c2c2;
  margin-bottom: 10px;
  padding: 5px;

  >span {
    margin-bottom: 7px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 94%;

  margin: 7px 0;
  border-bottom: 1px solid #c2c2c2;
  padding-bottom: 10px;

  img {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 10px;

  button {
    background: #FFF;
    padding: 5px;
  }
`
