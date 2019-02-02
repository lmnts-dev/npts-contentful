import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../components/Button'
import { H3, PLarge, HeaderText, Text } from '../components/Headings'
import Row from '../components/Row'
import phone from '!svg-react-loader!../images/svg-icons/phone.svg?name=phone'
import email from '!svg-react-loader!../images/svg-icons/email.svg?name=email'
import Fade from 'react-reveal/Fade'
import Block from '../components/Block'

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
*/

// Styles
const TextBlock = styled.div`
  margin-bottom: 20px;
`

const Inner = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  input,
  textarea {
    font-family: inherit;
    font-size: inherit;
    @media (max-width: 600px) {
      font-size: 12px;
    }
    border: none;
    outline: none;
    background: #212829;
    letter-spacing: .05em;
    color: #ffffff;
    padding: 23.5px 28px;
    @media (max-width: 600px) {
      padding: 18px 30px;
    }
    &::-webkit-input-placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
    &::-moz-placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
    &:-ms-input-placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
    &:-moz-placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
    &:required {
      box-shadow: none;
    }
    &:focus {
      outline: none;
    }
  }
  &::before {
    content: '';
    background: black;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 0.2s all;
    opacity: ${props => (props.overlay ? '.8' : '0')};
    visibility: ${props => (props.overlay ? 'visible' : 'hidden')};
  }
`

const Name = styled.input`
  margin-bottom: 10px;
  width: 100%;
`

const Location = styled.input`
  margin-bottom: 10px;
  width: 100%;
`

const PhoneNumber = styled.input`
  margin-bottom: 10px;
  width: 100%;
`
const Notes = styled.input`
  margin-bottom: 10px;
  width: 100%;
`

const Message = styled.textarea`
  width: 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 127px;
  resize: vertical;
`

const Submit = styled.input`
  display: inline-block;
  letter-spacing: 1px;
  font-size: 19px !important;
  cursor: pointer;
  @media (max-width: 1440px) {
    font-size: 1.25vw !important;
  }
  @media (max-width: 1120px) {
    font-size: 14px !important;
  }
  line-height: 1;
  font-weight: 700;
  padding: 23px 46px !important;
  @media (max-width: 1440px) {
    padding: 1.6vw 3.19vw;
  }
  @media (max-width: 1120px) {
    padding: 19.2px 38.28px;
  }
  color: #9f4300 !important;

  border-radius: 46px;
  background-color: #ffffff !important;
  box-shadow: 0 3px 36px rgba(0, 0, 0, 0.16);
`
const Label = styled.label`
  color: #FFFFFF;
  margin-top: 10px;
  line-height: 2;
  letter-spacing: .05em;
`

const Modal = styled.div`
  background: white;
  padding: 2em;
  position: fixed;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 99;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    min-width: inherit;
    max-width: 400px;
  }
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
`

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
*/

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      number: '',
      email: '',
      message: '',
      notes: '',
      location: '',
      showModal: false,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      showModal: true,
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  // Render our form

  render() {
    return (
      <Fade cascade duration={2000}>
            <Form
            name="contact"
            onSubmit={this.handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot"
            overlay={this.state.showModal}
            onClick={this.closeModal}
            >

            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
                <label>
                Don’t fill this out:{' '}
                <input name="bot" onChange={this.handleInputChange} />
                </label>
            </p>

            <Block bgColor="#293536">
              <Inner>
                <Label for="name">Name</Label>
                <Name
                    name="name"
                    type="text"
                    placeholder="Name (required)"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    required
                />
                <Label for="location">Drop-off location</Label>
                <Location
                    name="location"
                    type="text"
                    placeholder="Drop off address (required)"
                    value={this.state.location}
                    onChange={this.handleInputChange}
                    required
                />
                <Label for="number">Phone Number</Label>
                <PhoneNumber
                    name="number"
                    type="tel"
                    placeholder="Phone number (required)"
                    value={this.state.number}
                    onChange={this.handleInputChange}
                    required
                />
                <Label for="message">
                    Please leave a detailed description of where you would like the firewood dropped.
                    <i>Ex: “Left side of driveway, near the rose bush”</i>
                </Label>
                <Message
                    name="message"
                    type="text"
                    placeholder="Description (required)"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    required
                />
                <Label for="notes">Additional notes</Label>
                <Notes
                    name="notes"
                    type="text"
                    placeholder="Notes"
                    value={this.state.notes}
                    onChange={this.handleInputChange}
                    required
                />
                <Submit name="submit" type="submit" value="Apply for free firewood" />

                <Modal visible={this.state.showModal}>
                    <p>
                    Thank you for reaching out. We will get back to you as soon as
                    possible.
                    </p>
                    <Button dark to="#" onClick={this.closeModal}>
                    Okay
                    </Button>
                </Modal>
              </Inner>
            </Block>
            </Form>
        
      </Fade>
    )
  }
}

ContactForm.propTypes = {
  data: PropTypes.object,
}

export default ContactForm
