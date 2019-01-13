
import React from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'
import { H1, H2, H3, P, PLarge, Text, HeaderText } from '../components/Headings'

/* these are what you can call ////////////////

    <TextBlock header="header" text="lorem" bText="button" dest="/" bgColor="#FFFFF0" theme="dark" pushUp/>
    <LargeTextBlock header="header" text="lorem" bText="button" dest="/" bgColor="#FFFF00" theme="dark" pushLeft/>

///////////////////////////////////////////////////////// */


const Wrapper = styled.div`
    background-color: ${props => props.bgColor || '#000000'};
    padding: ${props => props.padding || '50px 10vw'};
    &:: after {
        background-color: ${props => props.bgColor || '#000000'};
    }
    ${props => {
        /* push block left */
        if (props.pushLeft) return ` 
          position: relative;
          width: 110%;
          left: -10%;
        `
      }}
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

`

export const TextBlock = props => {
    if (props.theme === "light"){
        return (
            <Wrapper bgColor={props.bgColor} pushUp={props.pushUp} pushLeft={props.pushLeft} padding={props.padding}>
                <H2 color="#FFFFFF">
                    {props.header}
                </H2>
                <P color="#FFFFFF">
                    {props.text} 
                </P>
                <Button to={props.dest}>
                    {props.bText}
                </Button>
            </Wrapper>
        )
    }
    else {
        return (
            <Wrapper bgColor={props.bgColor} pushUp={props.pushUp} pushLeft={props.pushLeft} padding={props.padding}>
                <H2 color="#000000">
                    {props.header}
                </H2>
                <P color="#000000">
                    {props.text} 
                </P>
                <Button to={props.dest} dark>
                    {props.bText}
                </Button>
            </Wrapper>
        )
    }
}

export const LargeTextBlock = props => {
    if (props.theme === "light"){
        return (
            <Wrapper bgColor={props.bgColor} pushUp={props.pushUp} pushLeft={props.pushLeft} padding={props.padding}>
                <H3 color="#FFFFFF">
                    {props.header}
                </H3>
                <PLarge color="#FFFFFF">
                    {props.text} 
                </PLarge>
                <Button to={props.dest}>
                    {props.bText}
                </Button>
            </Wrapper>
        )
    }
    else {
        return (
            <Wrapper bgColor={props.bgColor} pushUp={props.pushUp} pushLeft={props.pushLeft} padding={props.padding}>
                <H3 color="#000000">
                    {props.header}
                </H3>
                <PLarge color="#000000">
                    {props.text} 
                </PLarge>
                <Button to={props.dest} dark>
                    {props.bText}
                </Button>
            </Wrapper>
        )
    }

}