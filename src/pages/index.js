import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import SEO from '../components/SEO'
import TextGroup from '../components/TextGroup'
import Row from '../components/Row'
import Column from '../components/Column'
import Testimonial from '../components/Testimonial'
import PullQuote from '../components/PullQuote'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const BgImage = styled.div`
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.src || 'transparent'});
  padding: ${props => (props.padding ? '200px' : '0')};
`


const Contact = ({ data }) => {
    const postNode = {
        title: `Contact - ${config.siteTitle}`,
    }

    return (
        <Layout>
            <Helmet>
                <title>{`Contact - ${config.siteTitle}`}</title>
            </Helmet>
            <SEO postNode={postNode} pagePath="contact" customTitle />

            <Container>
                <Row direction="row-reverse" rightBias>
                    <Column>
                        <TextGroup
                            padding
                            header="Professional and experienced tree care"
                            text="Serving the Northern Nevada and Tahoe area, we specialize in safe, considerate tree and shrub pruning, removal, and planting. "
                            buttonText="Our Services"
                            destination="/"
                        />
                        <TextGroup
                            lightText
                            padding
                            pushLeft
                            shadow
                            bgColor="#394343"
                            header="Residential &amp; Commercial Properties the Truckee Meadows area since 2006"
                            text="We provide professional and knowledgable arboricultural services for both residential and commercial properties, big and small. We work year-round and specialize in safe, considerate tree and shrub pruning, removal, and planting."
                            buttonText="Get a free quote"
                            destination="/"
                        />  
                    </Column>
                    <BgImage src="https://images.unsplash.com/photo-1546828209-e1663f3be594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
                </Row>
                <Row bgColor="#9DD5EA" zIndex="2" padding>
                    <Testimonial
                        text="Noah works with his son. He uses very new and modern equipment. It is probably a combination of all these factors that allows him to have bid the job at less than one-half the other bids."
                        name="Ralph C."
                        location="Reno, Nevada"
                    />
                    <PullQuote>
                        "Modern"
                    </PullQuote>
                </Row>
                <Row rightBias>
                    <TextGroup
                        largeText
                        padding
                        lightText
                        bgColor="#272929"
                        header="Removal"
                        text="We pride ourselves on our ability to extricate such very largeText and dangerous trees while doing no damage to the fine surroundings."
                        buttonText="Learn More"
                        destination="/"
                    />
                    <BgImage padding src="https://images.unsplash.com/photo-1546828209-e1663f3be594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
                </Row>
                <Row direction="row-reverse" rightBias>
                    <TextGroup
                        largeText
                        padding
                        header="Planting"
                        text="One tree or a hundred trees, no job is too big or small. There are few things better than watching a properly planted tree grow and thrive for years and even decades."
                        buttonText="Learn More"
                        destination="/"
                    />
                    <BgImage padding src="https://images.unsplash.com/photo-1546828209-e1663f3be594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
                </Row>
                <Row rightBias>
                    <TextGroup
                        largeText
                        padding
                        bgColor="#C9EAEB"
                        header="Trimming"
                        text="As a premier local tree service, we strive to offer the highest quality pruning or trimming possible. All our pruning is done to ISA standards and guidelines."
                        buttonText="Learn More"
                        destination="/"
                    />
                    <BgImage padding src="https://images.unsplash.com/photo-1546828209-e1663f3be594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
                </Row>
                <Row rightBias direction="row-reverse">
                    <TextGroup
                        largeText
                        padding
                        header="Surgery"
                        text="Supplemental structural support for trees and branches. We’re experts in the cabling and bracing procedures that are the current industry standards."
                        buttonText="Learn More"
                        destination="/"
                    />
                    <BgImage padding src="https://images.unsplash.com/photo-1546828209-e1663f3be594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
                </Row>
                <Row rightBias>
                    <TextGroup
                        largeText
                        padding
                        bgColor="#C9EAEB"
                        header="Plant Health Care (PHC)"
                        text="Our team will do everything possible to improve and maintain a tree’s health. We’ll do what is right for every tree."
                        buttonText="Learn More"
                        destination="/"
                    />
                    <BgImage padding src="https://images.unsplash.com/photo-1546828209-e1663f3be594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
                </Row>


            </Container>
        </Layout>
    )
}

export default Contact


