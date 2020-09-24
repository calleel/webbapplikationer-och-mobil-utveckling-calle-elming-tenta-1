import React, { useState } from "react"
import { StyledBurger } from "../elements"
import { RightNav } from "./RightNav"

// Changes the state of the nav menu burger
export const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  )
}
