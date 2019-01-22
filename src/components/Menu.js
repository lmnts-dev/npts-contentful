import React, {Component} from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import * as lmnts from '../data/Styles'
import styled from 'styled-components'
import Logo from "!svg-react-loader!../images/svg-icons/logo.svg?name=logo";
import Hamburger from "!svg-react-loader!../images/svg-icons/navburger.svg?name=navburger";
import exit from '../images/exit.png'
import { Wrapper } from '../components/Block'
import Contact from '../components/ContactForm'


const Center = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const Block = styled(Wrapper)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 150;
  padding: 0 4vw;
  margin: 0 auto;
  form {
    margin-top: 0;
  }
`

const Image = styled.img`
  position: absolute;
  left: 20%;
  top: 20%;
  width: 60%;
  height: 60%;
`

const Exitt = styled.div`
  position: absolute;
  pointer-events: all;
  cursor: pointer;
  top: 2px;
  right: 0;
  height: 66px;
  width: 66px;
  margin: 4vw;
  @media (max-width: 600px) {
    height: 51px;
    width: 51px;
  }
  background-color: #363636;
`


const NavLink = styled(AniLink)`
  text-transform: uppercase;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
`

const TalkLink = styled.div`
  text-transform: uppercase;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
  cursor: pointer;
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

class AboutModal extends Component {
  // constructor to set state and bind "this"
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.handleClick = this.handleClick.bind(this);
  }

  // function to handle the click
  handleClick() {
    console.log("click");
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  }

  // the render() method to put stuff into the DOM
  render() {
    // the modal you will toggle on and off
    const modal = (
      <Block bgColor="#272929" >
        <Exitt onClick={this.handleClick}>
          <Image src={exit} />
        </Exitt>
        <Center>
          <Contact />
        </Center>
      </Block>
    );
  return (
    <>
      {this.state.showModal ? modal : ''}
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
            <TalkLink onClick={this.handleClick} cover bg={lmnts.Anim.Page.Color} duration={lmnts.Anim.Page.Duration} direction={lmnts.Anim.Page.Direction} to="/contact" activeStyle={activeLinkStyle}>
              Let's Talk
            </TalkLink>
          </li>
          <li>
            <NavButton divider href="tel:7753760917" activeStyle={activeLinkStyle}>
              775.376.0917
            </NavButton>
          </li>
        </ul>
        <HamburgerLink onclick="showOverlay()">
          <Hamburger />
        </HamburgerLink>
      </Nav>
    </>
    )
  }
}

export default AboutModal;