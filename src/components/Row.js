import React from 'react'
import styled from 'styled-components'

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
  padding: ${props => props.padding || '0'};
  ${props => {
    /* absolute positioned block */
    if (props.absolute == 'bottomLeft')
      return `
        position: absolute;
        bottom: 0;
        left: 0;
    `
    if (props.absolute == 'bottomRight')
      return `
        position: absolute;
        bottom: 0;
        right: 0;
    `
    if (props.absolute == 'topLeft')
      return `
        position: absolute;
        top: 0
        left: 0;
    `
    if (props.absolute == 'topRight')
      return `
        position: absolute;
        top: 0;
        right: 0;
    `
  }};
`

export const Row = ({ justify, align, absolute, padding, children }) => {
  return (
    <RowWrapper
      justify={justify}
      align={align}
      absolute={absolute}
      padding={padding}
    >
      {children}
    </RowWrapper>
  )
}
export default Row
