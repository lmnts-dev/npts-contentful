import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: ${props => props.padding || '50px 10vw'};
  background-color: ${props => props.bgColor || '#000000'};
  width: ${props => props.width || '100%' };
  position: relative;
  &:: after {
    background-color: ${props => props.bgColor || '#000000'};
  }
  ${props => {
    /* absolute positioned block */
    if (props.absolute == "bottomLeft") return `
        position: absolute;
        bottom: 0;
        left: 0;
    `
    if (props.absolute == "bottomRight") return `
        position: absolute;
        bottom: 0;
        right: 0;
    `
    if (props.absolute == "topLeft") return `
        position: absolute;
        top: 0
        left: 0;
    `
    if (props.absolute == "topRight") return `
        position: absolute;
        top: 0;
        right: 0;
    `
  }};
  ${props => {
    /* push block up */
    if (props.pushUp) return ` 
      position: relative;
      transform: translateY(-50px);
      &::after {
          content: "";
          height: 50px;
          width: 100%;
          position: absolute;
          bottom: -50px;
          left: 0;
      }
    `
  }}
  ${props => {
    /* background image*/
    if (props.bgImage) return ` 
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
    `
  }}
  background-image: url(${props => props.bgImage || ''});
`

const Block = ({ bgImage, padding, bgColor, width, pushUp, absolute, children }) => {
    return (
        <Wrapper bgImage={bgImage} padding={padding} bgColor={bgColor} width={width} pushUp={pushUp} absolute={absolute}>
            {children}
        </Wrapper>
    )
}
export default Block
