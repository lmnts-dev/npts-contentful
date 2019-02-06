import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from '../components/Button'
import { P, H3, PLarge, HeaderText, Text } from '../components/Headings'
import Row from '../components/Row'
import phone from '!svg-react-loader!../images/svg-icons/phone.svg?name=phone'
import email from '!svg-react-loader!../images/svg-icons/email.svg?name=email'
import Fade from 'react-reveal/Fade'
import { Block, Wrapper } from '../components/Block'
import { Border } from '../components/Lines'

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
*/

// Styles

const List = styled(P)`
  letter-spacing: 0.04em;
  ol {
    list-style-type: decimal;
  }
  p {
    strong {
      font-weight: 700;
    }
  }
`

const Disclaimer = styled(P)`
  line-height: 1.6;
`

const TextBlock = styled.div`
  margin-bottom: 20px;
`

const Inner = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

const FormBlock = styled(Wrapper)`
  padding-bottom: 150px;
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
    margin-top: 5px;
    @media (max-width: 600px) {
      font-size: 12px;
    }
    border: none;
    outline: none;
    background: #363636;
    letter-spacing: 0.05em;
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
  margin-bottom: 20px;
  width: 100%;
`

const Location = styled.input`
  margin-bottom: 20px;
  width: 100%;
`

const Check = styled.input`
  position: absolute;
 // opacity: 0;
  cursor: pointer;
  height: 25px;
  width: 25px;
  z-index: 5;
  &:checked {
    color: red !important;
    span {
      background-color: white;
    }
  }
`

const CheckStyle = styled.span`
  position: absolute;
  height: 25px;
  border-radius: 50%;
  margin-left: 10px;
  width: 25px;
  background-color: #212829;
  border: 2.5px solid #212829;
  cursor: pointer;
  z-index: 4;
`

const CheckLabel = styled(P)`
  position: relative;
  display: inline-block;
  position: relative;
  margin-bottom: 20px;
  margin-top 10px;
  margin-right: 45px;
  &:hover {
    span {
      background-color: rgba(159, 67, 0, .3);
    }
  }
`


const PhoneNumber = styled.input`
  margin-bottom: 20px;
  width: 100%;
`
const Notes = styled.input`
  margin-bottom: 40px;
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
  line-height: 1.6;
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
      isChecked: false,
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

  handleCheckboxChange = event => {
    console.log('checkbox changed!', this.state.isChecked)
    this.setState((state) => {
      return { isChecked: !state.isChecked }
    });
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      number: '',
      email: '',
      message: '',
      notes: '',
      location: '',
      isChecked: false,
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
          name={this.props.type}
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
          <FormBlock bgColor="#272929">
            <Inner>
              <Label htmlFor="name">Name</Label>
              <Name
                name="name"
                type="text"
                placeholder="Name (required)"
                value={this.state.name}
                onChange={this.handleInputChange}
                required
              />
              <Label htmlFor="location">Drop-off location</Label>
              <Location
                name="location"
                type="text"
                placeholder="Drop off address (required)"
                value={this.state.location}
                onChange={this.handleInputChange}
                required
              />
              <Label htmlFor="number">Phone Number</Label>
              <PhoneNumber
                name="number"
                type="tel"
                placeholder="Phone number (required)"
                value={this.state.number}
                onChange={this.handleInputChange}
                required
              />
              <Label htmlFor="message">
                Please leave a detailed description of where you would like the {this.props.type.toLowerCase()} dropped.
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
              <Label htmlFor="call">Call before delivery?</Label><br />
              <CheckLabel color="#FFFFFF">Yes</CheckLabel>
              <Check
                type="checkbox"
                name="call"
                value="yes"
              />< br />
              <Label htmlFor="notes">Additional notes</Label>
              <Notes
                name="notes"
                type="text"
                placeholder="Notes"
                value={this.state.notes}
                onChange={this.handleInputChange}
              />
            </Inner>
          </FormBlock>
            <Block bgColor="#293536">
              <Inner>
                <List color="#FFFFFF" dangerouslySetInnerHTML={{
                  __html: this.props.disclaimer }}
                    />
                  <Border color="#9F4300" width="100%" margin="40px 0" />
                  <Disclaimer color="#FFFFFF">Please indicate you have read and agree to the Terms of the {this.props.type} Drop.</Disclaimer>
                  
                  <CheckLabel as="label" htmlFor="disclaimer" color="#FFFFFF">I Agree
                    <Check 
                        onChange={this.handleCheckboxChange} 
                        checked={this.state.isChecked}
                        type="checkbox" 
                        name="disclaimer" 
                        value="I agree"
                    />
                  <CheckStyle />
                  </CheckLabel>< br/>
              <Submit name="submit" type="submit" value={"Apply for free " + this.props.type.toLowerCase()} />

              <Modal visible={this.state.showModal}>
                <p>
                  Thank you for reaching out. We will get back to you as soon as
                  possible.
                    </p>
                <Button dark to="/success" onClick={this.closeModal}>
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
