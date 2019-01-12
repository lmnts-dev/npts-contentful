import React from 'react'
import styled from 'styled-components'
import Branch from "!svg-react-loader!../images/svg-icons/branch.svg?name=branch";


const Wrapper = styled.div`
  font-size: 100px;
  color: #ffffff;
  font-family: 'Tinos', serif;
  line-height: 1;
  margin: ${props => (props.margin ? '0 0 0 20px' : '0')};
`

const PullQuote = ({responsiveMargin, children }) => {
  return <Wrapper margin={responsiveMargin}>
      {children}
      <Branch />
    </Wrapper>
}
export default PullQuote
