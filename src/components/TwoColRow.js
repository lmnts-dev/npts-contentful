import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  div:first-of-type {
    width: ${props => {
        /* adjust widths of each column */
        if (props.bias == "left") return "55%"
        if (props.bias == "right") return "45%"
        return "50%"
    }};
  }
  div:last-of-type {
    width: ${props => {
        /* adjust widths of each column */
        if (props.bias == "left") return "45%"
        if (props.bias == "right") return "55%"
        return "50%"
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
