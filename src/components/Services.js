import React from 'react'
import TwoColRow from '../components/TwoColRow'
import { Wrapper } from '../components/Block'
import { LargeTextBlock } from '../components/TextBlocks'
import leafPlanting from "../images/leafPlanting.png"
import leafSurgery from "../images/leafSurgery.png"
import styled from 'styled-components'
import Planting from "../images/planting.jpg"
import PHC from "../images/phc.jpg"
import Removal from "../images/removal.jpg"
import Surgery from "../images/surgury.jpg"
import Trimming from "../images/trimming.jpg"
import { MiddleLeaf, RightLeaf } from '../components/Leaves'

const Block = styled(Wrapper)`
  @media (max-width: 2000px) {
    padding: ${props => props.padding || '50px 10vw'};
  }
`

const Services = () => (  
        <div>
            <TwoColRow smallReverse bias="left">
                <LargeTextBlock line="right" header="Removal" text="We pride ourselves on our ability to extricate such very large and dangerous trees while doing no damage to the fine surroundings." bText="Learn more" dest="/removal" theme="light" bgColor="#272929"/>
                <Block bgImage={Removal} />
            </TwoColRow>
            <TwoColRow bias="right">
                <Block bgImage={Planting} />
                <LargeTextBlock line="left" header="Planting" text="One tree or a hundred trees, no job is too big or small. There are few things better than watching a properly planted tree grow and thrive for years and even decades." bText="Learn more" dest="/planting" theme="dark" bgColor="#FFFFFF" pushUp/>
                <MiddleLeaf src={leafPlanting} alt="leaf"/>
            </TwoColRow>
            <TwoColRow smallReverse bias="left">
                <LargeTextBlock line="right" header="Trimming" text="As a premier local tree service, we strive to offer the highest quality pruning or trimming possible. All our pruning is done to ISA standards and guidelines." bText="Learn more" dest="/trimming" theme="dark" bgColor="#C9EAEB"/>
                <Block bgImage={Trimming} />
            </TwoColRow>
            <TwoColRow bias="right">
                <Block bgImage={Surgery} />
                <LargeTextBlock header="Surgery" text="Supplemental structural support for trees and branches. We’re experts in the cabling and bracing procedures that are the current industry standards." bText="Learn more" dest="/surgery" theme="dark" bgColor="#FFFFFF"/>
                <RightLeaf src={leafSurgery} alt="leaf"/>
            </TwoColRow>
            <TwoColRow smallReverse bias="left">
                <LargeTextBlock line="right" header="Plant Health Care (PHC)" text="Our team will do everything possible to improve and maintain a tree’s health. We’ll do what is right for every tree." bText="Learn more" dest="/plant-health-care-phc" theme="dark" bgColor="#C9EAEB"/>
                <Block bgImage={PHC} />
            </TwoColRow>
        </div>
    )
export default Services
