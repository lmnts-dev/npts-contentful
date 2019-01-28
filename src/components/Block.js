import React from 'react'
import styled from 'styled-components'
import { fadeIn } from '../data/KeyFrames'
import Fade from 'react-reveal/Fade';

export const Wrapper = styled.div`
  animation: ${fadeIn} .5s ease-in-out 0s;
  padding: ${props => props.padding || '50px 200px'};  
  background-color: ${props => props.bgColor || '#000000'};
  width: ${props => props.width || '100%'};
  position: relative;
  &:after {
    background-color: ${props => props.bgColor || '#000000'};
  }
  ${props => {
    /* absolute positioned block */
    if (props.absolute == 'bottomLeft') return `
        position: absolute;
        bottom: 0;
        left: 0;
    `
    if (props.absolute == 'bottomRight') return `
        position: absolute;
        bottom: 0;
        right: 0;
    `
    if (props.absolute == 'topLeft') return `
        position: absolute;
        top: 0
        left: 0;
    `
    if (props.absolute == 'topRight') return `
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
      @media ( max-width: 750px ){
        transform: translateY(0);
      }
      &::after {
          content: "";
          height: 50px;
          width: 100%;
          position: absolute;
          bottom: -50px;
          left: 0;
          @media ( max-width: 750px ){
            bottom: 0;
            height: 0;
          }
      }
    `
  }}
  ${props => {
    /* background image*/
    if (props.bgImage) return ` 
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        @media ( max-width: 600px ){
            height: 50vh;
            min-height: 300px;
        }
    `
  }}
  background-image: url(${props => props.bgImage || ''});
`

export const HeaderBlock = styled(Wrapper)`
  padding: 150px 120px 120px 120px;
  @media (max-width: 2000px) {
    padding: 150px 6vw 6vw 6vw;
  }
  @media (max-width: 500px) {
    padding: 100px 3vw 10vw 3vw;
  }
`

export const Block = ({ bgImage, padding, bgColor, width, pushUp, absolute, children }) => {
    return (
        <Fade big>
          <Wrapper bgImage={bgImage} padding={padding} bgColor={bgColor} width={width} pushUp={pushUp} absolute={absolute}>
              {children}
          </Wrapper>
        </Fade>
    )
}
export default Block
