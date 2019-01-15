import React from 'react'
import TwoColRow from '../components/TwoColRow'
import Block from '../components/Block'
import { TextBlock } from '../components/TextBlocks'
import Column from '../components/Column'

const IntroBlocks = () => (  
    <TwoColRow bias="right">
        <Block bgImage="https://images.unsplash.com/photo-1546828209-e1663f3be594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
        <Column>
            <TextBlock line="left" header="Professional and experienced tree care" text="Serving the Northern Nevada and Tahoe area, we specialize in safe, considerate tree and shrub pruning, removal, and planting. " bText="Our Services" dest="/services" theme="dark" bgColor="white"/>
            <TextBlock header="Residential & Commercial Properties the Truckee Meadows area since 2006" text="We provide professional and knowledgable arboricultural services for both residential and commercial properties, big and small. We work year-round and specialize in safe, considerate tree and shrub pruning, removal, and planting." bText="Get a free quote" dest="tel:7753760917" theme="light" bgColor="#394343" pushLeft/>
        </Column>
    </TwoColRow>
)
export default IntroBlocks