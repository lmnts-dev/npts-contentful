import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import * as lmnts from '../data/Styles'
import styled from 'styled-components'
import Logo from "!svg-react-loader!../images/svg-icons/logo.svg?name=logo";
import Hamburger from "!svg-react-loader!../images/svg-icons/navburger.svg?name=navburger";
import HamburgerMenu from '../components/MenuOverlay'


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


const NavButton = styled.a`
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
  a, div {
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
    <>
      <Nav>
        <LogoLink cover bg={lmnts.Anim.Page.Color} duration={lmnts.Anim.Page.Duration} direction={lmnts.Anim.Page.Direction} to="/" activeStyle={activeLinkStyle}>
          <Logo />
        </LogoLink>
        <ul>
          <li>
            <NavLink cover bg={lmnts.Anim.Page.Color} duration={lmnts.Anim.Page.Duration} direction={lmnts.Anim.Page.Direction} to="/services" activeStyle={activeLinkStyle}>
              Services
              </NavLink>
          </li>
          <li>
            <NavLink cover bg={lmnts.Anim.Page.Color} duration={lmnts.Anim.Page.Duration} direction={lmnts.Anim.Page.Direction} to="/about" activeStyle={activeLinkStyle}>
              About
              </NavLink>
          </li>
          <li>
            <NavLink cover bg={lmnts.Anim.Page.Color} duration={lmnts.Anim.Page.Duration} direction={lmnts.Anim.Page.Direction} to="/contact" activeStyle={activeLinkStyle}>
              Let's Talk
              </NavLink>
          </li>
          <li>
            <NavButton divider href="tel:7753760917" activeStyle={activeLinkStyle}>
              775.376.0917
            </NavButton>
          </li>
        </ul>
        <HamburgerMenu/>
      </Nav>
    </>
  )
}

export default Menu