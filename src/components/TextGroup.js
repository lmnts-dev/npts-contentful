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

  position: ${props => (props.pushLeft ? 'relative' : 'default')};
  left: ${props => (props.pushLeft ? '-5vw' : '0')};
  width: ${props => (props.pushLeft ? 'calc( 100% + 5vw)' : 'auto')};

  box-shadow: ${props => (props.shadow ? '0px 0px 72px rgba(0, 0, 0, .28)' : '0')};
`

const Header = styled.h2`
  font-size: ${props => (props.largeText ? '80px' : '56px')};
  font-family: 'Tinos', serif;
  color: #434343;
  font-weight: 700;
  color: ${props => (props.lightText ? '#FFFFFF' : '#434343')};
  margin: 0;
  line-height: 1.1;
`

const Text = styled.p`
  font-size: ${props => (props.largeText ? '22px' : '18px')};
  font-family: 'Montserrat', sans-serif;
  color: #434343;
  line-height: 1.5;
  margin: 20px 0 25px 0;
  color: ${props => (props.lightText ? '#FFFFFF' : '#434343')};
`

const Group = props => (
    <Wrapper shadow={props.shadow} padding={props.padding} bgColor={props.bgColor} pushLeft={props.pushLeft}>
        <Header largeText={props.largeText} lightText={props.lightText}>
            {props.header}
        </Header>
        <Text largeText={props.largeText} lightText={props.lightText}>
            {props.text}
        </Text>
        <Button largeText={props.largeText} dark={!props.lightText} destination={props.destination} text={props.buttonText} />
    </Wrapper>
)
export default Group