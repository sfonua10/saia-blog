import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Personal Tech Blog by{" "}
    <Styled.a href="http://twitter.com/saiafonua">Saia Fonua</Styled.a>
    <br />
    Blogging about things I'm learning
  </Fragment>
)
