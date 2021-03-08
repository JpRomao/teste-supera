import { shade } from "polished";
import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    h2 {
      margin-bottom: 35px;
    }
  }
`;

export const Items = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  >div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 75%;
  }
`
export const ItemCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;

  @media (min-width: 900px) {
    width: 50%;
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #000;
  width: 50%;
  margin: 15px 0;
`;

export const LinksContainer = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  width: 100%;

  @media(min-width: 700px) {
    font-size: 2rem;
    width: 70%;
  }

  >button, a {
      color: #FFF;
      font-weight: bold;
      background: #009900;
      padding: 5px;
      font-size: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45%;
      border-radius: 10px;
      margin-top: 20px;
      text-decoration: none;

      &:hover {
        background: ${shade(0.3, '#009900')};
        font-size: 1.8rem;
        width: 50%;
      }

      @media(min-width: 700px) {
        font-size: 2rem;
        width: 45%;

        &:hover {
          font-size: 2.3rem;
          width: 50%;
        }
      }
    }
`;
