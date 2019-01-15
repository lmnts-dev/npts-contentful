import React from 'react'
import TwoColRow from '../components/TwoColRow'
import Block from '../components/Block'
import { LargeTextBlock } from '../components/TextBlocks'
import leafPlanting from "../images/leafPlanting.png"
import leafSurgery from "../images/leafSurgery.png"
import styled from 'styled-components'

const Leaves = styled.img `
    position: absolute;
    z-index: 3;
`

const FirstLeaf = styled(Leaves)`
    height: 250px;
    left: 40%;
    bottom: -20%;
`

const SecondLeaf = styled(Leaves)`
    height: 200px;
    right: 0;
    bottom: -20%;
`

const Services = () => (  
        <div>
            <TwoColRow bias="left">
                <LargeTextBlock line="right" header="Removal" text="We pride ourselves on our ability to extricate such very large and dangerous trees while doing no damage to the fine surroundings." bText="Learn more" dest="/" theme="light" bgColor="#272929"/>
                <Block bgImage="https://images.unsplash.com/photo-1546828209-e1663f3be594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
            </TwoColRow>
            <TwoColRow bias="right">
                <Block bgImage="https://images.unsplash.com/photo-1546828209-e1663f3be594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
                <LargeTextBlock line="left" header="Planting" text="One tree or a hundred trees, no job is too big or small. There are few things better than watching a properly planted tree grow and thrive for years and even decades." bText="Learn more" dest="/" theme="dark" bgColor="#FFFFFF" pushUp/>
                <FirstLeaf src={leafPlanting} alt="leaf"/>
            </TwoColRow>
            <TwoColRow bias="left">
                <LargeTextBlock line="right" header="Trimming" text="As a premier local tree service, we strive to offer the highest quality pruning or trimming possible. All our pruning is done to ISA standards and guidelines." bText="Learn more" dest="/" theme="dark" bgColor="#C9EAEB"/>
                <Block bgImage="https://images.unsplash.com/photo-1546828209-e1663f3be594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
            </TwoColRow>
            <TwoColRow bias="right">
                <Block bgImage="https://images.unsplash.com/photo-1546828209-e1663f3be594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
                <LargeTextBlock header="Surgery" text="Supplemental structural support for trees and branches. We’re experts in the cabling and bracing procedures that are the current industry standards." bText="Learn more" dest="/" theme="dark" bgColor="#FFFFFF"/>
                <SecondLeaf src={leafSurgery} alt="leaf"/>
            </TwoColRow>
            <TwoColRow bias="left">
                <LargeTextBlock line="right" header="Plant Health Care (PHC)" text="Our team will do everything possible to improve and maintain a tree’s health. We’ll do what is right for every tree." bText="Learn more" dest="/" theme="dark" bgColor="#C9EAEB"/>
                <Block bgImage="https://images.unsplash.com/photo-1546828209-e1663f3be594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
            </TwoColRow>
        </div>
    )
export default Services
