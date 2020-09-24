import styled from "styled-components"

export const NavWrapper = styled.nav`
  grid-column: 1 / span 14;
  grid-row: 1 / 2;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  border-bottom: 2px solid #f1f1f1;
  z-index: 10;

  img {
    height: 30px;
    /* padding: 15px 0; */
    z-index: 20;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 8;
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed; 
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0; 
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`

export const StyledBurger = styled.div`
  grid-column: 2 / span 6;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px; 
  z-index: 30;
  display: none;

  @media ${props => props.theme.breakpoints.tablet} {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 40;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`