
import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { H2, H3, P, PLarge } from '../components/Headings'
import { HeaderLine } from '../components/Lines'


/* these are what you can call ////////////////

    <TextBlock header="header" text="lorem" bText="button" dest="/" bgColor="#FFFFF0" theme="dark" pushUp/>
    <LargeTextBlock header="header" text="lorem" bText="button" dest="/" bgColor="#FFFF00" theme="dark" pushLeft/>

///////////////////////////////////////////////////////// */

const Line = styled(HeaderLine)`
    @media ( max-width: 600px ){
        &::after {
            width: 300%;
            right: -300%;
            ${props => {
                /* switch to left side of header */
                if (props.direction === "left") return ` 
                  right: auto;
                  left: -300%;
                `
              }}
        }
    }
`

const Wrapper = styled.div`
    position: relative;
    z-index: 2;
    background-color: ${props => props.bgColor || '#000000'};
    padding: 115px 144px;
    @media ( max-width: 1440px ){
        padding: 8vw 10vw;
    }
    @media ( max-width: 700px ){
        padding: 64px 80px;
    }
    @media ( max-width: 450px ){
        padding: 64px 25px;
    }
    &:: after {
        background-color: ${props => props.bgColor || '#000000'};
    }
    ${props => {
        /* push block left */
        if (props.pushLeft) return ` 
          position: relative;
          width: 110%;
          left: -10%;
          @media ( max-width: 600px ){
            width: 100%;
            left: auto;
          }
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
          @media ( max-width: 600px ){
              transform: translateY(0);
              &::after {
                height: 0;
                bottom: 0;
              }
          }
        `
      }}

`

export const TextBlock = props => {
    if (props.theme === "light"){
        return (
            <Wrapper bgColor={props.bgColor} pushUp={props.pushUp} pushLeft={props.pushLeft} padding={props.padding}>
                <Line direction={props.line} color="#FFFFFF" >
                    <H2 color="#FFFFFF">
                        {props.header}
                    </H2>
                </Line>
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
                <Line direction={props.line} color="#293536" >
                    <H2 color="#293536">
                        {props.header}
                    </H2>
                </Line>
                <P color="#293536">
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
                <Line direction={props.line} color="#FFFFFF" >
                    <H3 color="#FFFFFF">
                        {props.header}
                    </H3>
                </Line>
                <PLarge color="#FFFFFF">
                    {props.text} 
                </PLarge>
                <Button to={props.dest} arrowButton>
                    {props.bText}
                </Button>
            </Wrapper>
        )
    }
    else {
        return (
            <Wrapper bgColor={props.bgColor} pushUp={props.pushUp} pushLeft={props.pushLeft} padding={props.padding}>
                <Line direction={props.line} color="#293536" >
                    <H3 color="#293536">
                        {props.header}
                    </H3>
                </Line>
                <PLarge color="#293536">
                    {props.text} 
                </PLarge>
                <Button to={props.dest} dark arrowButton>
                    {props.bText}
                </Button>
            </Wrapper>
        )
    }

}