import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from '!svg-react-loader!../images/svg-icons/logo.svg?name=logo'
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

const NavInner = styled.div`
  animation: ${fadeIn} 0.5s ease-in-out 0s;
  padding: 20px 20px 60px 20px;
  max-width: 2000px;
  width: 100%;
  position: ${props => (props.isTop ? 'unset' : 'relative')};
`

const Nav = styled.nav`
  animation-iteration-count: 1;
  position: ${props => props.navPosition};
  top: 0px;
  right: 36px;
  left: ${props => (props.isTop ? '36px' : '50%')};
  width: ${props => (props.isTop ? 'auto' : '100%')};
  transform: ${props =>
    props.isTop ? 'translateY(36px)' : 'translateX(-50%)'};
  padding: ${props => (props.isTop ? '0px 0px 0px 0px' : '0px 36px 0px 36px')};
  z-index: 100;
  max-width: 2000px;
  @media (max-width: 600px) {
    right: 16px;
    left: ${props => (props.isTop ? '16px' : '50%')};
    width: ${props => (props.isTop ? 'auto' : '100%')};
    transform: ${props =>
      props.isTop ? 'translateY(16px)' : 'translateX(-50%)'};
    padding: ${props =>
      props.isTop ? '0px 0px 0px 0px' : '0px 16px 0px 16px'};
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    transition: background-color 1s ease;
    background: ${props => props.bgColor};
    height: ${props => props.height};
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    transition: all 1s ease;
    opacity: ${props => (props.isTop ? '0' : '1')};
    background: #000000;
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
    color: #ffffff;
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

  render() {
    console.log('isTop: ' + this.props.isTop)
    console.log(this.props.isTop ? this.navTopBg : this.navScrollBg)
    return (
      // The line below this is where you can use the shorthand logic to change the Nav's styles on scroll. I'm passing these props into the styled component above.

      <Nav
        isTop={this.props.isTop} // Prop result passed from ScrollWrapper component.
        bgColor={this.props.isTop ? this.navTopBg : this.navScrollBg}
        height={this.props.isTop ? this.navTopHeight : this.navScrollHeight}
        navPosition={this.props.isTop ? 'absolute' : 'fixed'}
      >
        <NavInner>
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
        </NavInner>
      </Nav>
    )
  }
}

export default Menu
