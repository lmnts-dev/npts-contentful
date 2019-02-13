import React from 'react'
import styled from 'styled-components'
import { ColumnWrapper } from '../components/Column'
import { TwoColRowWrapper } from '../components/TwoColRow'
import { Wrapper, Block } from '../components/Block'
import {  HeaderText, PLarge } from '../components/Headings'

const TwoColRow = styled(TwoColRowWrapper)`
    @media (max-width: 750px){
        flex-direction: column-reverse;
    }
`

const Point = styled(PLarge)`
    margin-bottom: 0;
    padding-left: 25px;
    position: relative;
    &:before {
        position: absolute;
        left: 0;
        content: "o"
    }
`

const Column = styled(ColumnWrapper)`
  padding: 8vw;
  @media (max-width: 1000px ){
    padding: 60px 50px;
  }
  @media (max-width: 500px ){
    padding: 60px 25px;
  }
`

const ImageBlock = styled(Wrapper)`
  @media ( max-width: 750px){
    height: 30vh;
    min-height: 300px;
    max-height: 500px;
  }
`

const GuidanceBlock = ( props ) => {
  return (
      <>
        <TwoColRow bias="right">
            <ImageBlock padding="0" bgImage={props.guidance.image.ogimg.src} />
              <Block padding="0" bgColor="#394343">
              <Column>
                <HeaderText as="h2" size="42" color="#FFFFFF" weight="700">
                    {props.guidance.header}
                </HeaderText>
                { props.guidance.points.map(({ node: point }, index) => {
                    return (
                    <Point key={index} color="#FFFFFF">
                        {props.guidance.points[index]}
                    </Point>
                    )}
                )}
              </Column>
            </Block>
        </TwoColRow>
      </>
  )
}

export default GuidanceBlock
