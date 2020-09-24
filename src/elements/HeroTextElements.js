import styled from "styled-components"

// Styles for the hero text
export const HeroTextWrapper = styled.div`
  grid-column: 2 / span 10;
  grid-row: 2 / 3;
  position: relative;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  margin: 0;

  H1 {
    font-size: 5rem;
    padding: 1rem;
    color: ${props => props.theme.colors.light2};
    font-family: ${props => props.theme.fonts.hero};
  }

  P {
    font-size: 1.7rem;
    padding: 1rem;
    color: ${props => props.theme.colors.light2};
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    H1 {
      font-size: 3rem;
      padding: 0.5rem;
      color: ${props => props.theme.colors.light1};
    }

    P {
      font-size: 1.2rem;
      padding: 0.5rem;
      color: ${props => props.theme.colors.light1};
    }
  }
`
