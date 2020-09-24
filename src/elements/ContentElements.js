import styled from "styled-components"

// Wrapper for the main content styles
export const ContentWrapper = styled.main`
  grid-column: 1 / span 14;
  grid-row: 3 / 5;
  background-color: ${props => props.theme.colors.light2};
  padding: ${props =>
    `${props.theme.spacings.xxLarge} ${props.theme.spacings.xxLarge}`};
  box-shadow: ${props => props.theme.shadows.shadow1};
  z-index: 10;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 8;
    display: flex;
    flex-direction: column;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
  }
`
