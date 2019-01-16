import React from 'react'
import TwoColRow from '../components/TwoColRow'
import Block from '../components/Block'
import { TextBlock } from '../components/TextBlocks'
import { Divider } from '../components/Lines'
import Column from '../components/Column'
import leaf from "../images/leafTestimonial.png"
import styled from 'styled-components'
import IntroImage from "../images/intro.jpg"




const Leaves = styled.img `
    position: absolute;
    z-index: 3;
    height: 250px;
    right: -10%;
    bottom: -12%;
    @media ( max-width: 600px ){
        height: 150px;
        bottom: -8%;
        left: 60%;
    }
`


const IntroBlocks = () => (  
    <div>
        <TwoColRow bias="right">
            <Block padding="0" bgImage={IntroImage} />
            <Column>
                <TextBlock line="left" header="Professional and experienced tree care" text="Serving the Northern Nevada and Tahoe area, we specialize in safe, considerate tree and shrub pruning, removal, and planting. " bText="Our Services" dest="/services" theme="dark" bgColor="white"/>
                <TextBlock header="Residential & Commercial Properties the Truckee Meadows area since 2006" text="We provide professional and knowledgable arboricultural services for both residential and commercial properties, big and small. We work year-round and specialize in safe, considerate tree and shrub pruning, removal, and planting." bText="Free Quote" dest="tel:7753760917" theme="light" bgColor="#394343" pushLeft/>
            </Column>
        <Leaves src={leaf}/>
        </TwoColRow>
        <Divider />
    </div>
)
export default IntroBlocks