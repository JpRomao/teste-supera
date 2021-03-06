import styled from 'styled-components';

export const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  font-size: 1.4rem;
  margin-top: 5px;
  padding: 5px 0;
  width: 100%;
  border: 1px solid #000;

  span, strong {
    border-left: 1px solid #000;
    height: 100%;
    padding: 25%;
  }

  @media(min-width: 960px) {
    display: grid;
    grid-template-columns: 1fr repeat(3, 250px);
  }
`;
