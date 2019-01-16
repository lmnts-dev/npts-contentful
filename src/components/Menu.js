import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import * as lmnts from '../data/Styles'
import styled from 'styled-components'
import Logo from "!svg-react-loader!../images/svg-icons/logo.svg?name=logo";
import Hamburger from "!svg-react-loader!../images/svg-icons/navburger.svg?name=navburger";


const NavLink = styled(AniLink)`
  text-transform: uppercase;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
`

const LogoLink = styled(AniLink)`
  position: absolute;
  left: 15px;
  top: 15px;
  @media (max-width: 600px){
    svg {
      width: 230px;
    }
  }
`

const HamburgerLink = styled.div`
  display: none;
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
  rect {
    fill: #FFFFFF;
  }
  @media (max-width: 1115px){
    display: block;
  }
  @media (max-width: 600px){
    top: 18px;
    svg {
      width: 23px;
    }
  }
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
  color: #FFFFFF !important;
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

const Nav = styled.nav`
  padding: 20px;
  position: absolute;
  z-index: 100;
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 1115px){
      display: none;
    }
  }
  li {
    display: inline-block;
    margin-left: 30px;
  }
  a {
    text-decoration: none;
    color: #FFFFFF;
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: #9F4300;
    }
  }
`

const activeLinkStyle = {
  color: '#9F4300',
}

const Menu = () => {
  return (
      <Nav>
        <LogoLink paintDrip hex={lmnts.Anim.Page.Color} duration={lmnts.Anim.Page.Duration} to="/" activeStyle={activeLinkStyle}>
          <Logo />
        </LogoLink>
        <ul>
          <li>
            <NavLink paintDrip hex={lmnts.Anim.Page.Color} duration={lmnts.Anim.Page.Duration} to="/services" activeStyle={activeLinkStyle}>
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
              Let's Talk
              </NavLink>
          </li>
          <li>
            <NavButton divider to="/contact/" activeStyle={activeLinkStyle}>
              775.376.0917
            </NavButton>
          </li>
        </ul>
        <HamburgerLink onclick="showOverlay()" >
          <Hamburger />
        </HamburgerLink>
      </Nav>
  )
}

export default Menu