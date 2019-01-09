import React from 'react'
import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import * as lmnts from '../data/Styles'

const Wrapper = styled.div`
  margin: -2em 0 0 0;
  padding: 0 1.5em 2em;
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  a {
    background: ${props => props.theme.colors.base};
    color: white;
    padding: 1em;
    border-radius: 2px;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      background: ${props => props.theme.colors.highlight};
    }
  }
`

const PreviousLink = styled(AniLink)`
  margin-right: auto;
  order: 1;
`

const NextLink = styled(AniLink)`
  margin-left: auto;
  order: 2;
`

const PostLinks = props => {
  return (
    <Wrapper>
      <Box>
        {props.previous && (
          <PreviousLink direction="left" cover bg={lmnts.Anim.Page.Color} duration={lmnts.Anim.Page.Duration} to={`/${props.previous.slug}/`}>
            &#8592; Prev Post
          </PreviousLink>
        )}
        {props.next && (
          <NextLink direction="right" cover bg={lmnts.Anim.Page.Color} duration={lmnts.Anim.Page.Duration} to={`/${props.next.slug}/`}>Next Post &#8594;</NextLink>
        )}
      </Box>
    </Wrapper>
  )
}

export default PostLinks
