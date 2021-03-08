import styled from "styled-components";

export const HomeContainer = styled.div`
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
      color: #0000AA;
      width: 90%;
      margin: 20px 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    section {
      display: flex;
      flex-direction: column;
      width: 60%;
      align-items: center;
      justify-content: center;
      background-color: #E2E2E209;
      padding: 20px 0;
      border-radius: 30px;

      a {
        margin-top: 30px;
        font-size: 2rem;
        color: #7733FF;
      }
    }
  }
`;

export const Carousel = styled.div`
  display: flex;
  width: 60%;
  max-width: 350px;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
`;
