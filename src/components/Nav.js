import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper } from "../elements"
import { Burger } from "./Burger"

// graphql query for logo in nav
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
      <Burger />
    </NavWrapper>
  )
}
