import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { H2, H3, P, PLarge } from '../components/Headings'
import { HeaderLine } from '../components/Lines'
import { ColumnWrapper } from '../components/Column'
import Planting from '../images/planting.jpg'
import { Wrapper } from '../components/block'

const Image = styled(Wrapper)`
    height: 25vw;
    min-height: 300px;
`

const Column = styled(ColumnWrapper)`
    margin: 8vw .5vw 0 .5vw;
`


const ServiceBlock = props => (  
        <Column>
            <H3 weight="700">
                {props.header}
            </H3>
            <Image bgImage={Planting} />
            <PLarge>
                {props.text}
            </PLarge>
            <Button arrowButton dark to={props.dest}>
                {props.bText}
            </Button>
        </Column>
    )
export default ServiceBlock