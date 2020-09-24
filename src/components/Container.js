import React from "react"
import { ContainerWrapper } from "../elements"
import { Nav, Footer, HeroText } from "../components"

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      <HeroText />
      {children}
      <Footer />
    </ContainerWrapper>
  )
}
