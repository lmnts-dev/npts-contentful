import React from 'react'
import TwoColRow from '../components/TwoColRow'
import Block from '../components/Block'
import { TextBlock } from '../components/TextBlocks'
import { Divider } from '../components/Lines'
import Column from '../components/Column'
import leaf from "../images/leafTestimonial.png"
import IntroImage from "../images/intro.jpg"
import { RightToMidLeaf } from '../components/Leaves'


const IntroBlocks = props => {
    const data = props.data.edges[0].node
    console.log(data);
    return (
        <div>
            <TwoColRow bias="right">
                <Block padding="0" bgImage={data.mainImage.ogimg.src} />
                <Column>
                    <TextBlock line="left" header={data.headerText1} inlineText={data.paragraphText1.childMarkdownRemark.html} bText={data.buttonText1} dest={"/" + data.buttonDestination1} theme="dark" bgColor="white"/>
                    <TextBlock header={data.headerText2} inlineText={data.paragraphText2.childMarkdownRemark.html} bText={data.buttonText2} dest={"/" + data.buttonDestination2} theme="light" bgColor="#394343" pushLeft/>
                </Column>
            <RightToMidLeaf src={leaf}/>
            </TwoColRow>
            <Divider />
        </div>
    )
}
export default IntroBlocks