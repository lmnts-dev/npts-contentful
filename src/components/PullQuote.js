import React from 'react'
import styled from 'styled-components'
import Row from './Row'

const Wrapper = styled.div`
  font-size: 184px;
  color: #FFFFFF;
  font-family: 'Tinos', serif;
`

const PullQuote = ({children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}
export default PullQuote
