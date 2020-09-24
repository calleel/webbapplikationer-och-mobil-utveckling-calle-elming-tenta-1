import styled from "styled-components"

// Styles for the sites container with grid
export const ContainerWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(10, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: 5rem 92vh 40rem auto;
  gap: 0 2rem;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
  }
`
