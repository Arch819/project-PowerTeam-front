import styled from 'styled-components';

export const NavBox = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 72px;
    padding-bottom: 64px;
  }
`;
