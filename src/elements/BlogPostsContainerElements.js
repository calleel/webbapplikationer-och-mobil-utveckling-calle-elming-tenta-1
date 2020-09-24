import styled from "styled-components"

export const BlogPostsWrapper = styled.section`
    display: flex;
    flex-direction: row;

    @media ${props => props.theme.breakpoints.tablet} {
        flex-direction: column;
    }
`