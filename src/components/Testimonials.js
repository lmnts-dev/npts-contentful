import React from 'react'
import TwoColRow from '../components/TwoColRow'
import Row from '../components/Row'
import Block from '../components/Block'
import { Text, HeaderText } from '../components/Headings'
import Column from '../components/Column'
import Branch from "!svg-react-loader!../images/svg-icons/branch.svg?name=branch";

const Testimonials = () => (  
        <Block bgColor="#9DD5EA">
            <TwoColRow bias="left">
                <Column>
                    <Text lHeight="1.3" size="34"> Noah works with his son. He uses very new and modern equipment. It is probably a combination of all these factors that allows him to have bid the job at less than one-half the other bids.</Text>
                    <Row>
                        <HeaderText color="#FFFFFF" size="42" weight="700">Ralph C.</HeaderText>
                        <HeaderText color="#FFFFFF" size="42">Reno, Nevada</HeaderText>
                    </Row>
                </Column>
                <Column>
                    <HeaderText color="white" size="100">"Modern"</HeaderText>
                    <Branch/>
                </Column>
            </TwoColRow>
        </Block>
    )
export default Testimonials