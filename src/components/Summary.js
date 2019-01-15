import React from 'react'
import { Wrapper } from '../components/Block'
import styled from 'styled-components'
import { PLarge, HeaderText } from '../components/Headings'
import Column from '../components/Column'

const Block = styled(Wrapper)`
    padding: 1250px 700px;
    div {
        div:nth-of-type(1) {
            margin: 20px;
        }
    }
    @media ( max-width: 1440px ){
        padding: 100px 20vw;
    }
    @media ( max-width: 600px ){
        padding: 10vw 10vw;
        div {
            div:nth-of-type(1) {
                margin: 10px;
            }
        }
    }
    @media ( max-width: 450px ){
        padding: 50px 25px;
    }

`

const Summary = () => (                  
        <Block bgColor="#9F4300">
            <Column align="center">
                <HeaderText size="42" weight="700" color="#FFFFFF" align="center">
                    Our Philosophy
                </HeaderText>
                <HeaderText size="100" weight="700" color="#FFFFFF" align="center">
                    Do what's right for the tree
                </HeaderText>
                <PLarge color="#FFFFFF" align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum maximus pharetra mi, in malesuada purus luctus placerat. Ut vulputate, enim sed feugiat consectetur, ex odio tempor tellus, sed laoreet mi tortor vitae mauris. Fusce vulputate ligula in massa mollis, ut finibus leo fermentum. 
                </PLarge>
            </Column>
        </Block>
    )
export default Summary