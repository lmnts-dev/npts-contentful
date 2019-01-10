import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Column = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}
export default Column