import React, { Component } from 'react'
import styled from 'styled-components'
import exit from '../images/exit.png'
import { Wrapper } from '../components/Block'
import Hamburger from '!svg-react-loader!../images/svg-icons/navburger.svg?name=navburger'
import Column from '../components/Column'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const HamburgerLink = styled.div`
  display: none;
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
  rect {
    fill: #ffffff;
  }
  @media (max-width: 1115px) {
    display: block;
  }
  @media (max-width: 600px) {
    top: 18px;
    svg {
      width: 23px;
    }
  }
`

const Item = styled(AniLink)`
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
    height: 100%;
`

const Block = styled(Wrapper)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
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

const activeLinkStyle = {
  color: '#9F4300',
}

class MenuModal extends Component {
    
    // constructor to set state and bind "this"
    constructor(props) {
        super(props);
        this.state = { showModal: false };
        this.handleClick = this.handleClick.bind(this);
    }

    // function to handle the click
    handleClick() {
        this.setState(prevState => ({
            showModal: !prevState.showModal
        }));
    }

    // the render() method to put stuff into the DOM
    render() {
        // the modal you will toggle on and off
        const modal = (
            <Block bgColor="#272929" onClick={this.handleClick}>
                <Exit>
                    <Image src={exit} />
                </Exit>
                <Center>
                    <Column align="center" justify="center">
                        <Item activeStyle={activeLinkStyle} to="/">Home</Item>
                        <Item activeStyle={activeLinkStyle} to="/services">Services</Item>
                        <Item activeStyle={activeLinkStyle} to="/about">About</Item>
                        <Item activeStyle={activeLinkStyle} to="/contact">Contact</Item>
                        <SecondaryLinks>
                            <Item activeStyle={activeLinkStyle} to="/our-work">Our Work</Item>
                            <Item activeStyle={activeLinkStyle} to="/firewood">Firewood</Item>
                            <Item activeStyle={activeLinkStyle} to="/woodchips">Chip Drop</Item>
                            <Item activeStyle={activeLinkStyle} to="/careers">Careers</Item>
                        </SecondaryLinks>
                    </Column>
                </Center>
            </Block>
        );
        return <>
            {this.state.showModal ? modal : ''}
            <HamburgerLink onClick={this.handleClick} >
                <Hamburger />
            </HamburgerLink>
          </>
    }
}

export default MenuModal;