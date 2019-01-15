import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import HeroSlider from '../components/HeroSlider'
import IntroBlocks from '../components/IntroBlocks'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
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


const Summary = () => (                  
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
    )
export default Summary