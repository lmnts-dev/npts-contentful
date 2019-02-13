import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from '../components/Button'
import { P } from '../components/Headings'
import { Wrapper } from '../components/Block'
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

const Inner = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

const FormBlock = styled(Wrapper)`
  padding: 100px 25px;
  padding-bottom: ${props => (props.paddingBottom ? '200px' : '100px')};
  @media (max-width: 1200px) {
    padding: 10vw 25px;
    padding-bottom: ${props => (props.paddingBottom ? '20vw' : '10vw')};
  }
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
    @media (max-width: 1440px) {
      font-size: 1.11vw;
    }
    @media (max-width: 1100px) {
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
  label {
    @media (max-width: 1440px) {
      font-size: 1.11vw;
    }
    @media (max-width: 1100px) {
      font-size: 12px;
    }
  }
`

const Name = styled.input`
  margin-bottom: 20px;
  width: 100%;
`

const Type = styled.input`
  z-index: -55;
  position: absolute;
`

const Location = styled.input`
  margin-bottom: 20px;
  width: 100%;
`

const Check = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 40px;
  width: 40px;
  z-index: 5;
  &:checked {
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
  border: ${props =>
    props.grey ? '2.5px solid #363636;' : '2.5px solid #212829;'};
  cursor: pointer;
  z-index: 4;
  background-color: ${props =>
    props.checked ? '#9F4300' : props.grey ? '#363636' : '#212829'};
`

const CheckLabel = styled(P)`
  position: relative;
  display: inline-block;
  position: relative;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-right: 45px;
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
  color: #ffffff;
  margin-top: 10px;
  line-height: 1.6;
  letter-spacing: 0.05em;
`

const TypeLabel = styled.label`
  z-index: -55;
  position: absolute;
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

class DropForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      number: '',
      email: '',
      type: this.props.type,
      message: '',
      notes: '',
      location: '',
      isChecked: false,
      isCallChecked: false,
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
      body: encode({ 'form-name': 'drop', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleCheckboxChange = event => {
    this.setState(state => {
      return { isChecked: !state.isChecked }
    })
  }

  handleCallChange = event => {
    this.setState(state => {
      return { isCallChecked: !state.isCallChecked }
    })
  }

  handleSuccess = () => {
    console.log(this.state)
    document.body.classList.add('modal-open');
    this.setState({
      name: '',
      number: '',
      email: '',
      message: '',
      type: this.props.type,
      notes: '',
      location: '',
      isChecked: false,
      isCallChecked: false,
      showModal: true,
    })
  }

  closeModal = () => {
    document.body.classList.remove('modal-open');
    this.setState({ showModal: false })
  }

  // Render our form

  render() {
    return (
      <>
        <Form
          name="drop"
          onSubmit={this.handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot"
          overlay={this.state.showModal}
          onClick={this.closeModal}
        >
          <input type="hidden" name="form-name" value="drop" />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot" onChange={this.handleInputChange} />
            </label>
          </p>
          <FormBlock bgColor="#272929">
            <Inner>
              <TypeLabel htmlFor="typw">Type</TypeLabel>
              <Type
                name="type"
                placeholder={this.props.type}
                type="text"
                value={this.state.type}
                onChange={this.handleInputChange}
                required
              />
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
                Please leave a detailed description of where you would like the{' '}
                {this.props.type.toLowerCase()} dropped.
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
              <Label htmlFor="call">Call before delivery?</Label>
              <br />
              <CheckLabel as="label" htmlFor="call" color="#FFFFFF">
                Yes
                <Check
                  onChange={this.handleCallChange}
                  checked={this.state.isCallChecked}
                  type="checkbox"
                  name="call"
                  value="Yes"
                />
                <CheckStyle checked={this.state.isCallChecked} grey />
              </CheckLabel>
              <br />
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
          <FormBlock bgColor="#293536" paddingBottom>
            <Inner>
              <List
                color="#FFFFFF"
                dangerouslySetInnerHTML={{
                  __html: this.props.disclaimer,
                }}
              />
              <Border color="#9F4300" width="100%" margin="40px 0" />
              <Disclaimer color="#FFFFFF">
                Please indicate you have read and agree to the Terms of the{' '}
                {this.props.type} Drop.
              </Disclaimer>

              <CheckLabel as="label" htmlFor="disclaimer" color="#FFFFFF">
                I Agree
                <Check
                  onChange={this.handleCheckboxChange}
                  checked={this.state.isChecked}
                  type="checkbox"
                  name="disclaimer"
                  value="I agree"
                  required
                />
                <CheckStyle checked={this.state.isChecked} />
              </CheckLabel>
              <br />
              <Submit
                name="submit"
                type="submit"
                value={'Apply for free ' + this.props.type.toLowerCase()}
              />

              <Modal visible={this.state.showModal}>
                <p>
                  Thank you for requesting our drop service. We'll reach out to you
                  with any questions, if any.
                </p>
                <Button dark to="/success" onClick={this.closeModal}>
                  Okay
                </Button>
              </Modal>
            </Inner>
          </FormBlock>
        </Form>
      </>
    )
  }
}

DropForm.propTypes = {
  data: PropTypes.object,
}

export default DropForm
