import React from 'react'
import TwoColRow from './TwoColRow'
import { Wrapper } from './Block'
import { LargeTextBlock } from './TextBlocks'
import leafPlanting from "../images/leafPlanting.png"
import leafSurgery from "../images/leafSurgery.png"
import styled from 'styled-components'
import { MiddleLeaf, RightLeaf } from './Leaves'

const Block = styled(Wrapper)`
  @media (max-width: 2000px) {
    padding: ${props => props.padding || '50px 10vw'};
  }
`

const Services = props => {
        const services = props.data;
        const firstService = services.edges[0].node
        const secondService = services.edges[1].node
        const thirdService = services.edges[2].node
        const fourthService = services.edges[3].node
        const fifthService = services.edges[4].node

    return (  
        <div>
            <TwoColRow smallReverse bias="left">
                <LargeTextBlock line="right" header={firstService.name} inlineText={firstService.shortSummary.childMarkdownRemark.html} bText="Learn more" dest={ "/" + firstService.name} theme="light" bgColor="#272929"/>
                <Block bgImage={firstService.image.ogimg.src} />
            </TwoColRow>
            <TwoColRow bias="right">
                <Block bgImage={secondService.image.ogimg.src} />
                <LargeTextBlock line="left" header={secondService.name} inlineText={secondService.shortSummary.childMarkdownRemark.html} bText="Learn more" dest={ "/" + secondService.name} theme="dark" bgColor="#FFFFFF" pushUp/>
                <MiddleLeaf src={leafPlanting} alt="leaf"/>
            </TwoColRow>
            <TwoColRow smallReverse bias="left">
                <LargeTextBlock line="right" header={thirdService.name} inlineText={thirdService.shortSummary.childMarkdownRemark.html} bText="Learn more" dest={ "/" + thirdService.name} theme="dark" bgColor="#C9EAEB"/>
                <Block bgImage={thirdService.image.ogimg.src} />
            </TwoColRow>
            <TwoColRow bias="right">
                <Block bgImage={fourthService.image.ogimg.src} />
                <LargeTextBlock header={fourthService.name} inlineText={fourthService.shortSummary.childMarkdownRemark.html} bText="Learn more" dest={ "/" + fourthService.name} theme="dark" bgColor="#FFFFFF"/>
                <RightLeaf src={leafSurgery} alt="leaf"/>
            </TwoColRow>
            <TwoColRow smallReverse bias="left">
                <LargeTextBlock line="right" header={fifthService.name} inlineText={fifthService.shortSummary.childMarkdownRemark.html} bText="Learn more" dest={ "/" + fifthService.name} theme="dark" bgColor="#C9EAEB"/>
                <Block bgImage={fifthService.image.ogimg.src} />
            </TwoColRow>
        </div>
    )
}
export default Services
