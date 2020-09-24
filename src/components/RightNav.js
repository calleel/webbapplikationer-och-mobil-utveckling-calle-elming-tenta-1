import React from "react"
import { Ul } from "../elements"

export const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>About me</li>
      <li>Contact</li>
      <li>My fourth post</li>
    </Ul>
  )
}
