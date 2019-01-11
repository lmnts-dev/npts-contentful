import React from 'react'
import styled from 'styled-components'
import Branch from "!svg-react-loader!../images/svg-icons/branch.svg?name=branch";

const Wrapper = styled.div`
  font-size: 184px;
  color: #FFFFFF;
  font-family: 'Tinos', serif;
  line-height: 1;
`

const PullQuote = ({children }) => {
  return (
    <Wrapper>
      {children}
      <Branch/>
    </Wrapper>
  )
}
export default PullQuote
