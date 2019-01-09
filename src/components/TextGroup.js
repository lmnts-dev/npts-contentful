import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  display: block;
  height: 100%;
  padding: ${props => (props.padding ? '200px' : '0')};
  background-color: ${props => props.bgColor || 'transparent'};
`

const Header = styled.h2`
  font-size: ${props => (props.large ? '80px' : '56px')};
  font-family: 'Tinos', serif;
  color: #434343;
  font-weight: 700;
  color: ${props => (props.light ? '#FFFFFF' : '#434343')};
  margin: 0;
`

const Text = styled.p`
  font-size: ${props => (props.large ? '22px' : '18px')};
  font-family: 'Montserrat', sans-serif;
  color: #434343;
  line-height: 1.5;
  margin: 20px 0 25px 0;
  color: ${props => (props.light ? '#FFFFFF' : '#434343')};
`

const Group = props => (
    <Wrapper padding={props.padding} bgColor={props.bgColor}>
        <Header large={props.large} light={props.light}>
            {props.header}
        </Header>
        <Text large={props.large} light={props.light}>
            {props.text}
        </Text>
        <Button large={props.large} dark={!props.light} destination={props.destination} text={props.buttonText} />
    </Wrapper>
)
export default Group