import React from 'react'
import styled from 'styled-components'

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media ( max-width: 600px ){
    flex-direction: ${props => props.reverse ? 'column' : 'column-reverse' };
  }
  position: relative;
  div:first-of-type {
    flex: ${props => {
        /* adjust widths of each column */
        if (props.bias == "left") return "5"
        if (props.bias == "right") return "4"
        return "1"
    }};
    @media ( max-width: 600px ){
        flex: 1;
    }
  }
  div:last-of-type {
    flex: ${props => {
        /* adjust widths of each column */
        if (props.bias == "left") return "4"
        if (props.bias == "right") return "5"
        return "1"
    }};
    @media ( max-width: 600px ){
        flex: 1;
    }
  }
`

const Block = ({ smallReverse, bias, children }) => {
    return (
        <RowWrapper reverse={smallReverse} bias={bias} >
            {children}
        </RowWrapper>
    )
}
export default Block
