


import React from 'react'
import styled from 'styled-components'

/* these are the four buttons you can call ////////////////

    STILL NEED TO FIGURE OUT CONTENT URL FOR BUTTON WITH ARROW 
    
    <Button to="/"> light pillow </Button>
    <Button to="/" dark> dark pillow </Button>
    <Button to="/" arrowButton> light arrow </Button>
    <Button to="/" arrowButton dark> dark arrow </Button>
    
///////////////////////////////////////////////////////// */

export const Button = styled.a`
  display: inline-block;
  letter-spacing: 1px;
  font-size: 19px;
  @media ( max-width: 1440px ){
    font-size: 1.25vw;
  }
  @media ( max-width: 1120px ){
    font-size: 14px;
  }
  font-family: 'Montserrat', sans-serif;
  line-height: 1;
  font-weight: 700;
  ${props => {
    /* grey background circle button */
    if (!props.arrowButton && props.dark) return ` 
      padding: 23px 46px;
      @media ( max-width: 1440px ){
        padding: 1.6vw 3.19vw;
      }
      @media ( max-width: 1120px ){
        padding: 19.2px 38.28px;
      }
      background-color: #F7F7F7;
      color: #9f4300;
      border-radius: 46px;
    `
    /* white background circle button */
    if (!props.arrowButton && !props.dark) return `
      padding: 23px 46px;
      @media ( max-width: 1440px ){
        padding: 1.6vw 3.19vw;
      }
      @media ( max-width: 1120px ){
        padding: 19.2px 38.28px;
      }
      color: #9f4300;
      border-radius: 46px;
      background-color: #FFFFFF;
      box-shadow: 0 3px 36px rgba( 0, 0, 0, .16);
    `
    /* white arrow button */
    if (props.arrowButton && !props.dark) return `
      color: #FFFFFF;
      &::after {
        content: url(./images/something.png) 
      }
    `
    /* dark arrow button */
    if (props.arrowButton && props.dark) return `
      color: #293536;
      &::after {
        content: url(./images/something-2.png);
      }
    `
  }}
`














/*
const Link = styled.a`
  display: inline-block;
  letter-spacing: 1px;
  font-size: 19px;
  font-family: 'Montserrat', sans-serif;
  line-height: 1;
  padding: ${props => (props.arrowButton ? '0' : '23px 46px')};
  background-color: ${props => {
    if (props.arrowButton) return 'transparent'
    if (props.darkBackground) return '#F7F7F7'
    return '#FFFFFF'
  }};
  color: ${props => {
    if (props.arrowButton && props.darkBackground) return '#293536'
    if (props.arrowButton && !(props.darkBackground)) return '#FFFFFF'
    return '#9f4300'
  }};
  color: ;
  border-radius: 46px;
  font-weight: 700;
  box-shadow: ${props =>
    !(props.arrowButton) && !(props.darkBackground) ? '0 3px 36px rgba( 0, 0, 0, .16)' : '0'};
  ${props => {
        if (props.arrowButton) return `
        &::after {
            content: "";
            position: absolute;
            height: 1px;
            width: 37px;
            background-color: #FFFFFF;
        }
        `
  }};
`

const Button = props => (
    <div>
        <Link arrowButton={props.largeText} lightWriting={props.lightText} darkBackground={props.dark} to={props.destination}>
            {props.text}
        </Link>
    </div>
)
export default Button

*/