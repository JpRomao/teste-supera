import styled from "styled-components";

export const CartItemCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &+div{
    margin-top: 6px;
  }

  >span {
    margin-right: 15px;

    &:first-child {
      width: 7rem;
    }

    strong {
      width: 5rem;
    }

    img {
      width: 100%;
    }

  }
  button {
    width: 35px;

    svg {
      width: 100%;
      height: 100%;
      color: #000000;
    }
  }
`;
