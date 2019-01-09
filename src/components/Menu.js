import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import * as lmnts from '../data/Styles'
import styled from 'styled-components'

const Header = styled.header`
  background: ${props => props.theme.colors.base};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: white;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <AniLink paintDrip hex={lmnts.Anim.Page.Color} duration={lmnts.Anim.Page.Duration} to="/" activeStyle={activeLinkStyle}>
              Home
            </AniLink>
          </li>
          <li>
            <AniLink direction={lmnts.Anim.Page.Direction} cover bg={lmnts.Anim.Page.Color} duration={lmnts.Anim.Page.Duration} direction={lmnts.Anim.Page.Direction} to="/about/" activeStyle={activeLinkStyle}>
              About
            </AniLink>
          </li>
          <li>
            <AniLink direction={lmnts.Anim.Page.Direction} cover bg={lmnts.Anim.Page.Color} duration={lmnts.Anim.Page.Duration} to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </AniLink>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
