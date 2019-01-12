import React from 'react'
import styled from 'styled-components'

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