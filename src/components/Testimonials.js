import React from 'react'
import styled from 'styled-components'
import { RowWrapper } from '../components/TwoColRow'
import { Wrapper } from '../components/Row'
import Block from '../components/Block'
import { Text, HeaderText } from '../components/Headings'
import { ColumnWrapper } from '../components/Column'
import Branch from "!svg-react-loader!../images/svg-icons/branch.svg?name=branch";

const Quote = styled(Text)`
    @media ( max-width: 600px ){
        text-align: center;
    }
`

const Info = styled(HeaderText)`
    @media ( max-width: 600px ){
        text-align: center;
    }
`

const Icon = styled(Branch)`
    margin-top: 2%;
    width: 30%;
    @media ( max-width: 600px ){
        width: 10%;
        min-width: 41px;
    }
`

const Column = styled(ColumnWrapper)`
    padding-right: 5vw;
    @media ( max-width: 600px ){
        padding-right: 0;
    }
`

const TwoColRow = styled(RowWrapper)`
    padding: 700px 1250px ;
    @media ( max-width: 1440px ){
        padding: 12vw 10vw;
    }
    @media ( max-width: 600px ){
        padding: 10vw 5vw;
        text-align: center;
    }
    @media ( max-width: 450px ){
        padding: 50px 25px;
    }
`

const Row = styled(Wrapper)`
    margin-top 20px;
    width: 100%;
    span {
        margin-right: 10px;
    }
    @media ( max-width: 600px ){
        justify-content: center;
    }
`
const Slash = styled.span`
    width: 10%;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        height: 1px;
        width: 120%;
        background-color: #FFFFFF;
        transform: rotate(-45deg);
        @media ( max-width: 600px ){
            left: 0;
        }
    }
`

const Testimonials = () => (  
        <Block bgColor="#9DD5EA" padding="0" >
            <TwoColRow bias="left">
                <Column>
                    <Quote lHeight="1.3" size="34"> Noah works with his son. He uses very new and modern equipment. It is probably a combination of all these factors that allows him to have bid the job at less than one-half the other bids.</Quote>
                    <Row justify="flex-start" align="center" >
                        <Info as="span" color="#FFFFFF" size="42" weight="700">Ralph C.</Info>
                        <Slash />
                        <Info as="span" color="#FFFFFF" size="42">Reno, Nevada</Info>
                    </Row>
                </Column>
                <Block bgColor="transparent" padding="0">
                    <Info color="white" size="100">"Modern"</Info>
                    <Icon/>
                </Block>
            </TwoColRow>
        </Block>
    )
export default Testimonials