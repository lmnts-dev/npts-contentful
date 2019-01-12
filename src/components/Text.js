import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  color: ${props => props.color || '#000000'};
  font-size: ${props => props.size || '36px'};
  font-family: ${props => props.fam || '"Tinos", serif'};
  text-align: ${props => (props.center ? 'center' : 'left')};
  font-weight: ${props => props.weight || '400'};
`

const TextBlock = ({ weight, center, color, size, fam, children }) => {
    return (
        <Text weight={weight} center={center} color={color} size={size} fam={fam}>
            {children}
        </Text>
    )
}
export default TextBlock