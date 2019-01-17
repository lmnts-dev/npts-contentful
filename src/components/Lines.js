
import React from 'react'
import styled from 'styled-components'


/* these are what you can call ////////////////

    <Border color="red" width="80%" margin="40px 0" />
    <HeaderLine where="left" >
        <H3 weight="700" align="center" color="black">heelo</H3>
    </HeaderLine>

///////////////////////////////////////////////////////// */

export const Border = styled.div`
      content: "";
      height: 1px;
      background-color: ${props => props.color || '#000000'};
      width: ${props => props.width || '100%'};
`;

export const HeaderLine = styled.div`
    display: inline-block;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: -120%;
        height: 1px;
        background-color: ${props => props.color || '#000000'};
        width: ${props => props.width || '120%'};
        margin: ${props => props.margin || '0 -20px'};
        display: ${props => props.direction ? 'block' : 'none'};
        ${props => {
            /* switch to left side of header */
            if (props.direction === "left") return ` 
              right: auto;
              left: -120%;
            `
          }}
    }
`;

export const Divider = styled.div`
    position: relative;
    z-index: 3;
    width: 100vw;
    &::after {
        content: '';
        position: absolute;
        height: 14vw;
        max-height: 180px;
        min-height: 80px;
        width: 1px;
        background-color: #ffffff;
        left: 50%;
        transform: translateY(-3vw);
        @media (max-width: 1440px) {
            transform: translateY(-6vw);
        }
        @media (max-width: 600px) {
            transform: translateY(-60px);
        }
    }
`
