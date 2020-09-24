import React from "react"
import { Ul } from "../elements"

// Right side of topnav
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
