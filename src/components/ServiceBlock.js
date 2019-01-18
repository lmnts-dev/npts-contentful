import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { H2, H3, P, PLarge } from '../components/Headings'
import { HeaderLine } from '../components/Lines'
import { ColumnWrapper } from '../components/Column'
import Planting from '../images/planting.jpg'
import { Wrapper } from '../components/block'

const Header = styled(H3)`
    margin-bottom: 30px;
    @media (max-width: 2000px) {
        margin-bottom: 1.5vw;
    }
    @media (max-width: 600px ) {
        margin-bottom: 10px;
    }
`

const Image = styled(Wrapper)`
    height: 500px;
    @media (max-width: 2000px) {
        height: 25vw;
    }
    min-height: 300px;
`

const Column = styled(ColumnWrapper)`
  margin: 160px 10px 0px 10px;
  @media (max-width: 2000px) {
    margin: 8vw 0.5vw 0 0.5vw;
  }
  @media (max-width: 600px) {
    margin: 15vw .5vw 0 .5vw;
  }
`


const ServiceBlock = props => (  
        <Column>
            <Header weight="700">
                {props.header}
            </Header>
            <Image padding="0" bgImage={Planting} />
            <PLarge>
                {props.text}
            </PLarge>
            <Button arrowButton dark to={props.dest}>
                {props.bText}
            </Button>
        </Column>
    )
export default ServiceBlock