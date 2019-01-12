
import React from 'react'
import styled from 'styled-components'


/* these are what you can call ////////////////

    STILL NEED TO DO VERTICAL BORDER AND SECTION CONNECTORS

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
      margin: ${props => props.margin || '20px 0'};
`;

export const HeaderLine = styled.div`
    display: inline-block;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: -100%;
        height: 1px;
        background-color: ${props => props.color || '#000000'};
        width: ${props => props.width || '100%'};
        margin: ${props => props.margin || '0 -20px'};
        ${props => {
            /* switch to left side of header */
            if (props.where === "left") return ` 
              right: auto;
              left: -100%;
            `
          }}
    }
`;
