import React from "react"
import { H1, P } from "../elements/TypographyElements"

export const BlogTitleContainer = () => {
  return (
    <section>
      <H1 textAlign="center" margin="0 0 1rem 0" color="dark1">
        We Love Code!
      </H1>
      <P color="dark2" textAlign="center">
        On this blog you can read articles related to the wonderful world of technology, feel free to join our community!
      </P>
    </section>
  )
}
