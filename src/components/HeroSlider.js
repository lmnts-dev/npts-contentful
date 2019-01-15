import React from 'react'
import TwoColRow from './TwoColRow'
import Button from './Button'
import Row from './Row'
import Block from './Block'
import { H1, P, Text } from './Headings'
import { Border } from './Lines'
import Column from './Column'
import Badge from "!svg-react-loader!../images/svg-icons/badge.svg?name=badge";
import Design from "!svg-react-loader!../images/svg-icons/design.svg?name=design";
import LeftArrow from "!svg-react-loader!../images/svg-icons/arrowLeft.svg?name=arrow";
import RightArrow from "!svg-react-loader!../images/svg-icons/arrowRight.svg?name=arrow";
import Locator from "!svg-react-loader!../images/svg-icons/locator.svg?name=locator";


const HeroSlider = () => (  
    <Block bgImage="https://images.unsplash.com/photo-1546828209-e1663f3be594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" padding="0">
        <TwoColRow bias="left">
            <Block bgColor="rgba(0, 0, 0, .6)" absolute="left">
                <H1 color="#FFFFFF" >Keeping your trees healthy &amp; beautiful</H1>
                <Border color="white" width="80%" margin="40px 0"/>
                <P color="white" >Dedicated to handling all your tree care needs, our experienced and knowledgeable team of arborists are committed to ensure the longevity of all your trees and shrubs.</P>
                <Button to="/">Get a free quote</Button>
                <Row justify="space-between">
                    <Badge />
                    <Text size="12" lHeight="1.2" color="#FFFFFF">As an ISA Certified Arborist, all of our work is performed to ISA standards and we are fully insured to operate in the area.</Text>
                </Row>
            </Block>
            <Block absolute="right" bgColor="transparent">
                <Design />
                <Row justify="space-between">
                    <Row absolute="bottomLeft">
                        <Locator />
                        <Text size="18" color="#FFFFFF" weight="300" transform="uppercase" >Reno, NV - Wingfield Park</Text>
                    </Row>
                    <Column absolute="bottomRight">
                        <RightArrow />
                        <LeftArrow />
                    </Column>
                </Row>
            </Block>
        </TwoColRow>
    </Block>
)

export default HeroSlider