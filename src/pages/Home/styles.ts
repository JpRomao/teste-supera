import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100vw;
  height: 100vh;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    section {
      display: flex;
      width: 60%;
      align-items: center;
      justify-content: center;
      background-color: #E2E2E209;
      padding: 50px 0;
      border-radius: 30px;
    }
  }
`;

export const Carousel = styled.div`
  display: flex;
  width: 60%;
  max-width: 350px;
  align-items: center;
  justify-content: center;

  svg {
    color: #FFF;
  }

  img {
    width: 100%;
  }
`;
