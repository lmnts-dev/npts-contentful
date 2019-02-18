import React from 'react'
import TwoColRow from './TwoColRow'
import { Wrapper } from './Block'
import { LargeTextBlock } from './TextBlocks'
import leafPlanting from '../images/leafPlanting.png'
import leafSurgery from '../images/leafSurgery.png'
import styled from 'styled-components'
import { MiddleLeaf, RightLeaf } from './Leaves'

const TrimmingLeaf = styled(MiddleLeaf)`
  bottom: auto;
  top: -35%;
  @media (max-width: 600px) {
    bottom: auto;
    top: -5%;
    left: -2%;
  }
`

const SurgeryLeaf = styled(RightLeaf)`
  bottom: auto;
  top: -20%;
  @media (max-width: 600px) {
    bottom: auto;
    top: -5%;
    right: -2%;
  }
`

const Block = styled(Wrapper)`
  @media (max-width: 2000px) {
    padding: ${props => props.padding || '50px 10vw'};
  }
`

const Services = props => {
  const services = props.data
  if ( services.edges[0] != null ){
    var firstService = services.edges[0].node
  }
  else {
    var firstService = false;
  }
  
  if ( services.edges[1] != null ){
    var secondService = services.edges[1].node
  }
  else {
    var secondService = false;
  }
  
  if ( services.edges[2] != null ){
    var thirdService = services.edges[2].node
  }
  else {
    var thirdService = false;
  }
  
  if ( services.edges[3] != null ){
    var fourthService = services.edges[3].node
  }
  else {
    var fourthService = false;
  }
  
  if ( services.edges[4] != null ){
    var fifthService = services.edges[4].node
  }
  else {
    var fifthService = false;
  }
  

  return (
    <div>
      {firstService && (
        <TwoColRow smallReverse bias="left">
          <LargeTextBlock
            line="right"
            header={firstService.name}
            inlineText={firstService.shortSummary.childMarkdownRemark.html}
            bText="Learn more"
            dest={
              '/services/' +
              firstService.name
                .replace('(', '')
                .replace(')', '')
                .replace(/[^a-z0-9]/gi, '-')
                .toLowerCase()
            }
            theme="light"
            bgColor="#272929"
          />
          <Block bgImage={firstService.firstAspectImage.ogimg.src} />
        </TwoColRow>
      )}
      {secondService && (
        <TwoColRow bias="right">
          <Block bgImage={secondService.firstAspectImage.ogimg.src} />
          <LargeTextBlock
            line="left"
            header={secondService.name}
            inlineText={secondService.shortSummary.childMarkdownRemark.html}
            bText="Learn more"
            dest={
              '/services/' +
              secondService.name
                .replace('(', '')
                .replace(')', '')
                .replace(/[^a-z0-9]/gi, '-')
                .toLowerCase()
            }
            theme="dark"
            bgColor="#FFFFFF"
            pushUp
          />
        </TwoColRow>
      )}
      {thirdService && (
        <TwoColRow smallReverse bias="left">
          <LargeTextBlock
            line="right"
            header={thirdService.name}
            inlineText={thirdService.shortSummary.childMarkdownRemark.html}
            bText="Learn more"
            dest={
              '/services/' +
              thirdService.name
                .replace('(', '')
                .replace(')', '')
                .replace(/[^a-z0-9]/gi, '-')
                .toLowerCase()
            }
            theme="dark"
            bgColor="#C9EAEB"
          />
          <Block bgImage={thirdService.firstAspectImage.ogimg.src} />
          <TrimmingLeaf src={leafPlanting} alt="leaf" />
        </TwoColRow>
      )}
      {fourthService && (
        <TwoColRow bias="right">
          <Block bgImage={fourthService.firstAspectImage.ogimg.src} />
          <LargeTextBlock
            header={fourthService.name}
            inlineText={fourthService.shortSummary.childMarkdownRemark.html}
            bText="Learn more"
            dest={
              '/services/' +
              fourthService.name
                .replace('(', '')
                .replace(')', '')
                .replace(/[^a-z0-9]/gi, '-')
                .toLowerCase()
            }
            theme="dark"
            bgColor="#FFFFFF"
          />
        </TwoColRow>
      )}
      {fifthService && (
        <TwoColRow smallReverse bias="left">
          <LargeTextBlock
            line="right"
            header={fifthService.name}
            inlineText={fifthService.shortSummary.childMarkdownRemark.html}
            bText="Learn more"
            dest={
              '/services/' +
              fifthService.name
                .replace('(', '')
                .replace(')', '')
                .replace(/[^a-z0-9]/gi, '-')
                .toLowerCase()
            }
            theme="dark"
            bgColor="#C9EAEB"
          />
          <Block bgImage={fifthService.firstAspectImage.ogimg.src} />
          <SurgeryLeaf src={leafSurgery} alt="leaf" />
        </TwoColRow>
      )}
    </div>
  )
}
export default Services
