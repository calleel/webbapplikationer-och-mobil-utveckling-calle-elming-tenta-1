import React from "react"
import { BlogPostsWrapper } from "../elements"

// A container with flex that holds blog posts
export const PostsContainer = ({ children }) => {
  return <BlogPostsWrapper>{children}</BlogPostsWrapper>
}
