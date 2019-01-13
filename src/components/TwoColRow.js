import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  div:first-of-type {
    flex: ${props => {
        /* adjust widths of each column */
        if (props.bias == "left") return "5"
        if (props.bias == "right") return "4"
        return "1"
    }};
  }
  div:last-of-type {
    flex: ${props => {
        /* adjust widths of each column */
        if (props.bias == "left") return "4"
        if (props.bias == "right") return "5"
        return "1"
    }};
  }
`

const Block = ({ bias, children }) => {
    return (
        <Wrapper bias={bias} >
            {children}
        </Wrapper>
    )
}
export default Block
