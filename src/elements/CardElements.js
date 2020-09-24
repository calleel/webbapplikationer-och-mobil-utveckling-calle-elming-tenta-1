import styled from "styled-components"

// Styles for the cards
export const CardWrapper = styled.div`
  margin: 2rem 1rem 0 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.light3};
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadows.shadow2};
`
