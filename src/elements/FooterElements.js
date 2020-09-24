import styled from "styled-components"

export const FooterWrapper = styled.footer`
  grid-column: 1 / span 14;
  min-height: 11.25rem;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: ${props => props.theme.colors.main1};

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 8;
  }
`

export const FooterSocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.colors.light1};

  p {
    text-align: center;
    flex: 0 0 100%;
    color: ${props => props.theme.colors.light1};
  }
`

export const FooterSocialIcons = styled.div`
  flex: 0 0 100%;
  margin-bottom: 2rem;

  img {
    height: 22px;
    padding: 0 1rem;
    transition: filter 0.3s ease;
    color: ${props => props.theme.colors.medium1};
  }

  img:hover,
  img:focus {
    filter: brightness(50%);
  }
`
