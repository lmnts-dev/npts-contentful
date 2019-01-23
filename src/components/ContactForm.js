import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../components/Button'
import { H3, PLarge, HeaderText, Text } from '../components/Headings'
import Row from '../components/Row'
import phone from '!svg-react-loader!../images/svg-icons/phone.svg?name=phone'
import email from '!svg-react-loader!../images/svg-icons/email.svg?name=email'
import exit from '../images/exit.png'
import { createBrowserHistory } from 'history'

// Create browser history, used further down on the <Exit> component.
const history = createBrowserHistory()

// Styles
const TextBlock = styled.div`
  margin-bottom: 20px;
  }
`
const Form = styled.form`
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 40px auto 0 auto;
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
    background: #363636;
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

const Phone = styled(phone)`
  width: 16px;
  margin-right: 16px;
  padding: 8px 0;
  @media (max-width: 1440px) {
    width: 1.11vw;
    margin-right: 1.11vw;
    padding: 0.555vw 0;
  }
  @media (max-width: 1260px) {
    width: 14px;
    margin-right: 14px;
    padding: 7px 0;
  }
`
const EmailIcon = styled(email)`
  width: 16px;
  margin-right: 16px;
  padding: 8px 0;
  @media (max-width: 1440px) {
    width: 1.11vw;
    margin-right: 1.11vw;
    padding: 0.555vw 0;
  }
  @media (max-width: 1260px) {
    width: 14px;
    margin-right: 14px;
    padding: 7px 0;
  }
`

const Info = styled(Text)`
  cursor: pointer;
  text-decoration: none !important;
`

const Name = styled.input`
  margin-bottom: 10px;
  width: 100%;
`

const Email = styled.input`
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
  @media ( max-width: 1440px ){
    font-size: 1.25vw !important;
  }
  @media ( max-width: 1120px ){
    font-size: 14px !important;
  }
  line-height: 1;
  font-weight: 700;
  padding: 23px 46px !important;
  @media ( max-width: 1440px ){
    padding: 1.6vw 3.19vw;
  }
  @media ( max-width: 1120px ){
    padding: 19.2px 38.28px;
  }
  color: #9f4300 !important;
  
  border-radius: 46px;
  background-color: #FFFFFF !important;
  box-shadow: 0 3px 36px rgba( 0, 0, 0, .16);
`

const Exit = styled.div`
  display: ${props => (props.noExit ? 'none' : 'block')};
  position: absolute;
  pointer-events: all;
  cursor: pointer;
  top: 2px;
  right: 0;
  height: 66px;
  width: 66px;
  @media (max-width: 600px) {
    height: 51px;
    width: 51px;
  }
  background-color: #363636;
`

const Image = styled.img`
  position: absolute;
  left: 20%;
  top: 20%;
  width: 60%;
  height: 60%;
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
      email: '',
      message: '',
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
      <>

      <Form
        name="contact"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot"
        overlay={this.state.showModal}
        onClick={this.closeModal}
      >
          <TextBlock>
            <Exit onClick={() => { history.goBack() }} noExit={this.props.noExit}>
              <Image src={exit} />
            </Exit>
            <HeaderText lHeight="2" size="80" color="#FFFFFF"> Let's Talk </HeaderText>
            <Row align="center">
              <Phone />
              <Info as="a" href="tel:7753760917" size="16" color="#FFFFFF">775.376.0917</Info>
            </Row>
            <Row align="center">
              <EmailIcon />
              <Info as="a" href="mailto:noahsparktreecare@gmail.com" size="16" color="#FFFFFF">noahsparktreecare@gmail.com</Info>
            </Row>
          </TextBlock>

        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot" onChange={this.handleInputChange} />
          </label>
        </p>

        <Name
          name="name"
          type="text"
          placeholder="Name (required)"
          value={this.state.name}
          onChange={this.handleInputChange}
          required
        />
        <Email
          name="email"
          type="email"
          placeholder="Email (required)"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <Message
          name="message"
          type="text"
          placeholder="What's up?"
          value={this.state.message}
          onChange={this.handleInputChange}
          required
        />
        <Submit name="submit" type="submit" value="Send" />

        <Modal visible={this.state.showModal}>
          <p>
            Thank you for reaching out. We will get back to you as soon as
            possible.
          </p>
          <Button dark onClick={this.closeModal}>Okay</Button>
        </Modal>
      </Form>
      </>
    )
  }
}

ContactForm.propTypes = {
  data: PropTypes.object,
}

export default ContactForm


