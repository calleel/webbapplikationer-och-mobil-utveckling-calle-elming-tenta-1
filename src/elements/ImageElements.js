import styled from "styled-components"

export const FeatureImageWrapper = styled.div`
  grid-column: 1 / span 14;
  grid-row: 1 / 3;
  overflow: hidden;
  position: relative;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 8;
  }
`
