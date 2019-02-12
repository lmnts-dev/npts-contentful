import React, { Component } from 'react'
import styled from 'styled-components'
import exit from '../images/exit.png'
import { Wrapper } from '../components/Block'
import Transition from '../components/Transition'
import Hamburger from '!svg-react-loader!../images/svg-icons/navburger.svg?name=navburger'
import Column from '../components/Column'

const HamburgerLink = styled.div`
  display: none;
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
  rect {
    transition: all 1s ease;
    ${props =>
      props.darknav && props.pagetop ? 'fill: #312B2B' : 'fill: #ffffff'}
  }
  @media (max-width: 1215px) {
    display: block;
  }
  @media (max-width: 600px) {
    top: 18px;
    svg {
      width: 23px;
    }
  }
`

const Item = styled.a`
  @media (max-width: 1440px) {
    font-size: 3vw;
  }
  @media (max-width: 720px) {
    font-size: 22px;
  }
  font-weight: 700;
  display: block;
  transition: all 0.2s;
  color: #7c7c7c;
  text-decoration: none;
  line-height: 1.5;
  &:hover {
    color: #7c7c7c;
  }
  &:visited {
    color: #7c7c7c;
  }
`

const Center = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #293536;
  padding: 0 4vw;
`

const Block = styled(Wrapper)`
  z-index: 999;
  margin: 0 auto;
  position: fixed;
  top: -16px;
  bottom: -16px;
  right: -17px;
  left: -17px;
  height: 100vh;
  width: 100vw;
  background-color: #293536;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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

const Exit = styled.div`
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
const SecondaryLinks = styled.div`
  margin-top: 28px;
  a {
    text-align: center;
    opacity: 0.5;
  }
`

class MenuModal extends Component {
  // constructor to set state and bind "this"
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      showHamburger: true,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  // function to handle the click
  handleClick() {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }))
    this.setState(prevState => ({
      showHamburger: !prevState.showHamburger,
    }))
  }

  // the render() method to put stuff into the DOM
  render() {
    // the modal you will toggle on and off
    const modal = (
      <Transition location='overlay'>
        <Block bgColor="#272929">
          <Exit>
            <Image src={exit} onClick={this.handleClick} />
          </Exit>
          <Center>
            <Column align="center" justify="center">
              <Item href="/" onClick={this.handleClick}>
                Home
              </Item>
              <Item href="/services" onClick={this.handleClick}>
                Services
              </Item>
              <Item href="/about" onClick={this.handleClick}>
                About
              </Item>
              <Item href="/contact" onClick={this.handleClick}>
                Contact
              </Item>
              <SecondaryLinks>
                <Item href="/our-work" onClick={this.handleClick}>
                  Our Work
                </Item>
                <Item href="/firewood" onClick={this.handleClick}>
                  Firewood
                </Item>
                <Item href="/woodchips" onClick={this.handleClick}>
                  Chip Drop
                </Item>
                <Item href="/careers" onClick={this.handleClick}>
                  Careers
                </Item>
              </SecondaryLinks>
            </Column>
          </Center>
        </Block>
      </Transition>
    )
    return (
      <>
        {this.state.showModal ? modal : ''}
        {this.state.showHamburger ? (
          <HamburgerLink
            onClick={this.handleClick}
            darknav={this.props.darknav}
            pagetop={this.props.pagetop}
          >
            <Hamburger />
          </HamburgerLink>
        ) : (
          ''
        )}
      </>
    )
  }
}

export default MenuModal
