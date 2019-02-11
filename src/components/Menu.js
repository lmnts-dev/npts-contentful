import React from 'react'
import { Link } from 'gatsby'
import * as lmnts from '../data/Styles'
import styled, { css } from 'styled-components'
import Logo from '!svg-react-loader!../images/svg-icons/logo.svg?name=logo'
import Hamburger from '!svg-react-loader!../images/svg-icons/navburger.svg?name=navburger'
import HamburgerMenu from '../components/MenuOverlay'
import { fadeIn } from '../data/KeyFrames'

const NavLink = styled(Link)`
  animation: ${fadeIn} ${props => props.animDuration} ease-in-out 0s;
  text-transform: uppercase;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
`

const LogoLink = styled(Link)`
  animation: ${fadeIn} ${props => props.animDuration} ease-in-out 0s;
  position: absolute;
  left: 15px;
  top: 15px;
  svg {
    fill: #293536 !important;
  }
  @media (max-width: 600px) {
    svg {
      width: 230px;
    }
  }
`

const NavButton = styled.a`
  text-transform: uppercase;
  background-color: #9f4300;
  font-size: 22px;
  letter-spacing: 1px;
  font-family: 'Tinos', serif;
  border-radius: 25px;
  padding: 12.5px 25px;
  position: relative;
  color: #ffffff !important;
  ${props =>
    props.divider
      ? `
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
      : 'margin-left: 0'}
`

const Nav = styled.nav`
  animation: ${fadeIn} 0.5s ease-in-out 0s;
  animation-iteration-count: 1;
  padding: 20px 20px 60px 20px;
  position: fixed;
  top: 0px;
  transform: translateY(${props => props.topDistance});
  left: 36px;
  right: 36px;
  z-index: 100;
  /* width: 100%; */
  transition: all 1s ease;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100px;
    background: ${props => props.bgColor};
    height: ${props => props.height};
  }
  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    z-index: 800;
    @media (max-width: 1115px) {
      display: none;
    }
  }
  li {
    display: inline-block;
    margin-left: 30px;
    z-index: 800;
  }
  a,
  div {
    text-decoration: none;
    color: #293536;
    font-weight: 600;
    transition: all 0.2s;
    z-index: 800;
  }
`

class Menu extends React.Component {
  // Optional link style for when you are on a specific page.
  activeLinkStyle = {}

  // For the transition of fading the navigation items in incrementally.
  fadeInDuration = 0.5
  fadeInIncrement = 0.2

  // Distance to be scrolled until changing navigation's styles.
  scrollDistance = 100

  // Scroll styles to be added after scrolling from the top of the page.
  navTopClearBg =
    'linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 99%)'
  navTopBg =
    'linear-gradient(-180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 99%)'

  navScrollBg =
    'linear-gradient(-180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 99%)'
  navScrollLightBg =
    'linear-gradient(-180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 99%)'

  navTopHeight = '100px'
  navScrollHeight = '60px'

  navScrollTopDistance = '0px'
  navTopDistance = '36px'

  render() {
    console.log('isTop: ' + this.props.isTop)
    console.log(this.props.isTop ? this.navTopBg : this.navScrollBg )
    return (
      // The line below this is where you can use the shorthand logic to change the Nav's styles on scroll. I'm passing these props into the styled component above.

      <Nav
        isTop={this.props.isTop} // Prop result passed from ScrollWrapper component.
        bgColor={this.props.isTop ? this.navTopBg : this.navScrollBg}
        topDistance={
          this.props.isTop ? this.navTopDistance : this.navScrollTopDistance
        }
        height={this.props.isTop ? this.navTopHeight : this.navScrollHeight}
      >
        <LogoLink
          dark={this.props.dark}
          to="/"
          activeStyle={this.activeLinkStyle}
        >
          <Logo />
        </LogoLink>
        <ul>
          <li>
            <NavLink to="/services" activeStyle={this.activeLinkStyle}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeStyle={this.activeLinkStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeStyle={this.activeLinkStyle}>
              Let's Talk
            </NavLink>
          </li>
          <li>
            <NavButton
              divider
              href="tel:7753760917"
              activeStyle={this.activeLinkStyle}
            >
              775.376.0917
            </NavButton>
          </li>
        </ul>
        <HamburgerMenu dark={this.props.dark} />
      </Nav>
    )
  }
}

export default Menu
