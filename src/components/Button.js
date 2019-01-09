import React from 'react'
import styled from 'styled-components'


const Link = styled.a`
  display: inline-block;
  letter-spacing: 1px;
  font-size: 19px;
  font-family: 'Montserrat', sans-serif;
  line-height: 1;
  padding: 23px 46px;
  background-color: ${props => (props.dark ? '#F7F7F7' : '#FFFFFF')};
  color: #9f4300;
  border-radius: 46px;
  font-weight: 700;
`

const Button = props => (
    <div>
        <Link dark={props.dark} to={props.destination}>
            {props.text}
        </Link>
    </div>
)
export default Button