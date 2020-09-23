import styled from "styled-components"

export const NavWrapper = styled.nav`
  grid-column: 1 / span 13;
  grid-row: 1 / 2;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0 2rem;

  img {
    height: 100px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;

    a {
      padding: 0.9rem;
      text-decoration: none;
      color: ${props => props.theme.colors.dark1};
    }
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 8;
    grid-row: 1 / span 3;
    

    img {
      display: none;
    }

    div {
      flex-direction: column;
      justify-items: center;
      margin: 0 auto;
      grid-row: 2 / span 3;
    }
  }
`
