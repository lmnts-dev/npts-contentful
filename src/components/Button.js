import React from 'react'
import styled from 'styled-components'


const Link = styled.a`
  display: inline-block;
  letter-spacing: 1px;
  font-size: 19px;
  font-family: 'Montserrat', sans-serif;
  line-height: 1;
  padding: ${props => (props.large ? '0' : '23px 46px')};
  background-color: ${props => {
    if (props.large) return 'transparent'
    if (props.dark) return '#F7F7F7'
    return '#FFFFFF'
  }};
  color: #9f4300;
  border-radius: 46px;
  font-weight: 700;
  box-shadow: ${props =>
    props.large ? '0' : '0 3px 36px rgba( 0, 0, 0, .16)'};
`

const Button = props => (
    <div>
        <Link large={props.largeText} dark={props.dark} to={props.destination}>
            {props.text}
        </Link>
    </div>
)
export default Button