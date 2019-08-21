import styled from 'styled-components';

const breakpoint = 800;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 60px;
`;

export const AppButton = styled.button`
  height: 50px;
  width: 100px;
  font-size: 1.5em;
  margin-bottom: 40px;
  @media (min-width: ${breakpoint}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const AppList = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  @media (min-width: ${breakpoint}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  li {
    background: gray;
    padding: 20px;
  }
`;
