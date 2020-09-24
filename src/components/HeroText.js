import React from "react"
import { H1, P } from "../elements"
import { HeroTextWrapper } from "../elements"

// The hero text
export const HeroText = () => {
  return (
    <HeroTextWrapper>
      <H1>Code & Coffee</H1>
      <P>A Blog about Code and Development</P>
    </HeroTextWrapper>
  )
}
