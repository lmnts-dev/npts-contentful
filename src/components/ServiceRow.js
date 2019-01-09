import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  div:first-of-type {
      flex: 4;
  }
  div:last-of-type {
      flex: 5;
  }
`

const ServiceRow = ({ direction, children}) => {
    return (
        <Wrapper direction={direction}>
            {children}
        </Wrapper>
    )
}
export default ServiceRow