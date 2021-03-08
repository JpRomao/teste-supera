import styled from "styled-components";

export const InputBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  >label {
    margin-right: 5px;
  }

  >input.search-bar {
    background: #FFFFFFCC;
    width: 6rem;
    border-radius: 6px;
    padding: 1px 3px;
    transition: width 0.5s ease-in-out;

    &:focus {
      width: 100%;
    }
  }
`;
