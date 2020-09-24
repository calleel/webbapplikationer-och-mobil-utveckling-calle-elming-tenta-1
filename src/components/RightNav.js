import React from "react"
import { Ul } from "../elements"

export const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Blog</li>
      <li>About</li>
      <li>Contact</li>
    </Ul>
  )
}
