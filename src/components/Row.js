import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  position: relative;
  z-index: ${props => props.zIndex || 'auto'};

  div:first-of-type {
    flex: ${props => {
      if (props.leftBias) return '4'
      if (props.rightBias) return '5'
      return '10'
    }};
  }
  div:last-of-type {
    flex: ${props => {
      if (props.leftBias) return '5'
      if (props.rightBias) return '4'
      return '10'
    }};
  }
  background-color: ${props => props.bgColor || 'transparent'};
`

const Row = ({ padding, zIndex, rightBias, leftBias, bgColor, direction, children }) => {
    return (
        <Wrapper padding={padding} zIndex={zIndex} rightBias={rightBias} leftBias={leftBias} bgColor={bgColor} direction={direction}>
            {children}
        </Wrapper>
    )
}
export default Row
