import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../components/Button'
import { HeaderText, Text } from '../components/Headings'
import { RowWrapper } from '../components/Row'
import phone from '!svg-react-loader!../images/svg-icons/phone.svg?name=phone'
import email from '!svg-react-loader!../images/svg-icons/email.svg?name=email'

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
*/

// Styles

const InfoRow = styled(RowWrapper)`
  @media (max-width: 750px) {
    margin-bottom: 0px !important;
  }
`

const TextBlock = styled.div`
  margin-bottom: 20px;
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

const HonClass = styled.p`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;
  pointer-events: none;
`

const PhoneNumber = styled.input`
  margin-bottom: 10px;
  width: 100%;
`

const Address1 = styled.input`
  margin-bottom: 10px;
  width: calc(50% - 5px);
  margin-right: 10px;
  @media (max-width: 750px) {
    width: 100%;
    margin-right: 0;
  }
`

const Address2 = styled.input`
  margin-bottom: 10px;
  width: calc(50% - 5px);
  @media (max-width: 750px) {
    width: 100%;
    margin-right: 0;
  }
`

const City = styled.input`
  margin-bottom: 10px;
  width: calc( (100%/3) - (20px / 3) );
  margin-right: 10px;
  @media (max-width: 750px) {
    width: 100%;
    margin-right: 0;
  }
`

const State = styled.input`
  margin-bottom: 10px;
  width: calc( (100%/3) - (20px / 3) );
  margin-right: 10px;
  @media (max-width: 750px) {
    width: calc(50% - 5px);
  }
`

const Zip = styled.input`
  margin-bottom: 10px;
  width: calc( (100%/3) - (20px / 3) );
  @media (max-width: 750px) {
    width: calc(50% - 5px);
  }
`
const Required = styled.p`
  margin-bottom: 20px;
  width: 100%;
  color: grey;
  @media (max-width: 600px) {
    font-size: 12px;
  }
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
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
    })
  }

  // Render our form

  render() {
    return (
      <>
        <Form
          name="contact"
          onSubmit={this.handleSubmit}
          data-netlify="true"
          netlify-honeypot="details"
          action="/contact-success"
        >
          <TextBlock>
            <HeaderText as="h3" lHeight="2" size="72" color="#FFFFFF">
              {' '}
              Let's Talk{' '}
            </HeaderText>
            <InfoRow align="center">
              <Phone />
              <Info as="a" href="tel:7753760917" size="16" color="#FFFFFF">
                775.376.0917
              </Info>
            </InfoRow>
            <InfoRow align="center">
              <EmailIcon />
              <Info
                as="a"
                href="mailto:noahsparktreecare@gmail.com"
                size="16"
                color="#FFFFFF"
              >
                noahsparktreecare@gmail.com
              </Info>
            </InfoRow>
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
            placeholder="Name*"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
          />
          <Email
            name="email"
            type="email"
            placeholder="Email*"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />
          <PhoneNumber
            name="phone"
            type="tel"
            placeholder="Phone Number*"
            value={this.state.phone}
            onChange={this.handleInputChange}
            required
          />
          <Address1
            name="address1"
            type="text"
            placeholder="Address Line 1*"
            value={this.state.address1}
            onChange={this.handleInputChange}
            required
          />
          <Address2
            name="address2"
            type="text"
            placeholder="Address Line 2"
            value={this.state.address2}
            onChange={this.handleInputChange}
          />
          <City
            name="city"
            type="text"
            placeholder="City*"
            value={this.state.city}
            onChange={this.handleInputChange}
            required
          />
          <State
            name="state"
            type="text"
            placeholder="State*"
            value={this.state.state}
            onChange={this.handleInputChange}
            required
          />
          <Zip
            name="zip"
            type="text"
            placeholder="Zip Code*"
            value={this.state.zip}
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
          <HonClass>
            <label>HonClass <input type="text" name="details" /></label>
          </HonClass>
          <Required>* Required</Required>
          <Submit name="submit" type="submit" value="Send" />

        </Form>
      </>
    )
  }
}

ContactForm.propTypes = {
  data: PropTypes.object,
}

export default ContactForm
