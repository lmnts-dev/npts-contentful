import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import * as lmnts from '../data/Styles'
import styled from 'styled-components'
import Logo from "!svg-react-loader!../images/svg-icons/logo.svg?name=logo";

const NavLink = styled(AniLink)`
  text-transform: uppercase;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
`
const NavButton = styled(AniLink)`
  text-transform: uppercase;
  background-color: #9F4300;
  font-size: 22px;
  letter-spacing: 1px;
  font-family: 'Tinos', serif;
  border-radius: 25px;
  padding: 12.5px 25px;
  position: relative;
  ${props => props.divider ?
    `
    margin-left: 25px;
    &::before {
      content: "";
      height: 100%;
      width: 1px;
      top: 0;
      left: -25px; 
      position: absolute;
      background-color: #FFFFFF;
    }
  `
    : "margin-left: 0"}
`


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
    align-items: center;
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
            <NavLink paintDrip hex={lmnts.Anim.Page.Color} duration={lmnts.Anim.Page.Duration} to="/" activeStyle={activeLinkStyle}>
              <Logo />
            </NavLink>
          </li>
          <li>
            <NavLink paintDrip hex={lmnts.Anim.Page.Color} duration={lmnts.Anim.Page.Duration} to="/" activeStyle={activeLinkStyle}>
              Services
              </NavLink>
          </li>
          <li>
            <NavLink paintDrip hex={lmnts.Anim.Page.Color} duration={lmnts.Anim.Page.Duration} to="/about" activeStyle={activeLinkStyle}>
              About
              </NavLink>
          </li>
          <li>
            <NavLink paintDrip hex={lmnts.Anim.Page.Color} duration={lmnts.Anim.Page.Duration} to="/contact" activeStyle={activeLinkStyle}>
              Contact
              </NavLink>
          </li>
          <li>
            <NavButton divider to="/contact/" activeStyle={activeLinkStyle}>
              775.376.0917
            </NavButton>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu