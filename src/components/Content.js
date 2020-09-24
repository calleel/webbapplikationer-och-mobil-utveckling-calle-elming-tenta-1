import React from "react"
import { ContentWrapper } from "../elements"
import { BlogTitleContainer } from "./BlogHeading"
import { PostsContainer } from "./BlogPostsContainer"

// Exports the main element with corresponding sections
export const Content = ({ children }) => {
  return (
    <ContentWrapper>
      <BlogTitleContainer />
      <PostsContainer>{children}</PostsContainer>
    </ContentWrapper>
  )
}
