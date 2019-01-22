import React, { Component } from 'react'
import styled from 'styled-components'
import exit from '../images/exit.png'
import { Wrapper } from '../components/Block'
import Contact from '../components/ContactForm'
import { ButtonStyle } from '../components/Button'


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
                <Exit onClick={this.handleClick}>
                    <Image src={exit} />
                </Exit>
                <Center>
                    <Contact />
                </Center>
            </Block>
        );
        return <>
            {this.state.showModal ? modal : ''}
            <ButtonStyle onClick={this.handleClick} >
                {this.props.text}
            </ButtonStyle>
          </>
    }
}

export default AboutModal;