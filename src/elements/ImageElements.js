import styled from "styled-components"

export const FeatureImageWrapper = styled.div`
  grid-column: 1 / span 13;
  grid-row: 1 / 4;
  overflow: hidden;
  position: relative;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 8;
  }
`
