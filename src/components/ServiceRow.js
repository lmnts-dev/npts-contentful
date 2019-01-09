import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  div {
      flex: 1;
  }
`

const ServiceRow = ({ children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}
export default ServiceRow