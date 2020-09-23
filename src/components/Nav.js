import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper } from "../elements"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "coffee-code-logo.png" }) {
        publicURL
      }
    }
  `)


  return (
    <NavWrapper>
      <Link to="/">
        <img src={data.logo.publicURL} alt="My Logo" />
      </Link>
        <div id="nav">
          <Link to="/">Home</Link>
          <Link to="/">Blog</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>
    </NavWrapper>
  )
}
