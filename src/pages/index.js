import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import TwoColRow from '../components/TwoColRow'
import { Button } from '../components/Button'
import Row from '../components/Row'
import Block from '../components/Block'
import { LargeTextBlock, TextBlock } from '../components/TextBlocks'
import { H1, H2, H3, P, PLarge, Text, HeaderText } from '../components/Headings'
import { Border, HeaderLine } from '../components/Lines'
import Container from '../components/Container'
import SEO from '../components/SEO'
import Column from '../components/Column'
import Branch from "!svg-react-loader!../images/svg-icons/branch.svg?name=branch";
import Badge from "!svg-react-loader!../images/svg-icons/badge.svg?name=badge";
import Design from "!svg-react-loader!../images/svg-icons/design.svg?name=design";
import LeftArrow from "!svg-react-loader!../images/svg-icons/arrowLeft.svg?name=arrow";
import RightArrow from "!svg-react-loader!../images/svg-icons/arrowRight.svg?name=arrow";
import Locator from "!svg-react-loader!../images/svg-icons/locator.svg?name=locator";





const Home = ({ data }) => {
    const postNode = {
        title: `Home - ${config.siteTitle}`,
    }

    return (
        <Layout>
            <Helmet>
                <title>{`Contact - ${config.siteTitle}`}</title>
            </Helmet>
            <SEO postNode={postNode} pagePath="contact" customTitle />

            <Container>
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
                <TwoColRow bias="right">
                    <Block bgImage="https://images.unsplash.com/photo-1546828209-e1663f3be594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
                    <Column>
                        <TextBlock header="Professional and experienced tree care" text="Serving the Northern Nevada and Tahoe area, we specialize in safe, considerate tree and shrub pruning, removal, and planting. " bText="Our Services" dest="/services" theme="dark" bgColor="white"/>
                        <TextBlock header="Residential & Commercial Properties the Truckee Meadows area since 2006" text="We provide professional and knowledgable arboricultural services for both residential and commercial properties, big and small. We work year-round and specialize in safe, considerate tree and shrub pruning, removal, and planting." bText="Get a free quote" dest="tel:7753760917" theme="light" bgColor="#394343" pushLeft/>
                    </Column>
                </TwoColRow>
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
                <TwoColRow bias="left">
                    <LargeTextBlock header="Removal" text="We pride ourselves on our ability to extricate such very large and dangerous trees while doing no damage to the fine surroundings." bText="Learn more" dest="/" theme="light" bgColor="#272929"/>
                    <Block bgImage="https://images.unsplash.com/photo-1546828209-e1663f3be594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
                </TwoColRow>
                <TwoColRow bias="right">
                    <Block bgImage="https://images.unsplash.com/photo-1546828209-e1663f3be594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
                    <LargeTextBlock header="Planting" text="One tree or a hundred trees, no job is too big or small. There are few things better than watching a properly planted tree grow and thrive for years and even decades." bText="Learn more" dest="/" theme="dark" bgColor="#FFFFFF"/>
                </TwoColRow>
                <TwoColRow bias="left">
                    <LargeTextBlock header="Trimming" text="As a premier local tree service, we strive to offer the highest quality pruning or trimming possible. All our pruning is done to ISA standards and guidelines." bText="Learn more" dest="/" theme="dark" bgColor="#C9EAEB"/>
                    <Block bgImage="https://images.unsplash.com/photo-1546828209-e1663f3be594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
                </TwoColRow>
                <TwoColRow bias="right">
                    <Block bgImage="https://images.unsplash.com/photo-1546828209-e1663f3be594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
                    <LargeTextBlock header="Surgery" text="Supplemental structural support for trees and branches. We’re experts in the cabling and bracing procedures that are the current industry standards." bText="Learn more" dest="/" theme="dark" bgColor="#FFFFFF"/>
                </TwoColRow>
                <TwoColRow bias="left">
                    <LargeTextBlock header="Plant Health Care (PHC)" text="Our team will do everything possible to improve and maintain a tree’s health. We’ll do what is right for every tree." bText="Learn more" dest="/" theme="dark" bgColor="#C9EAEB"/>
                    <Block bgImage="https://images.unsplash.com/photo-1546828209-e1663f3be594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
                </TwoColRow>
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
            </Container>
        </Layout>
    )
}

export default Home