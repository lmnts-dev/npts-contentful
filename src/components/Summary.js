import React from 'react'
import { Wrapper } from '../components/Block'
import styled from 'styled-components'
import { PLarge, HeaderText } from '../components/Headings'
import Column from '../components/Column'
import Button from '../components/Button'
import Leaf from '../images/leafSummary.png'
import { LeftLeaf } from '../components/Leaves'

const SummaryLeaf = styled(LeftLeaf)`
  display: ${props => (props.noLeaf ? 'none' : 'block')};
  @media (max-width: 750px) {
    bottom: 0;
  }
`

const Block = styled(Wrapper)`
  padding: 100px 288px;
  div {
    div:nth-of-type(1) {
      margin: 20px;
    }
  }
  @media (max-width: 1440px) {
    padding: 100px 20vw;
  }
  @media (max-width: 1000px) {
    padding: 100px 10vw;
  }
  @media (max-width: 600px) {
    padding: 10vw 10vw;
    div {
      div:nth-of-type(1) {
        margin: 10px;
      }
    }
  }
  @media (max-width: 450px) {
    padding: 50px 25px;
  }
`

const Summary = props => (
  <Block bgColor={props.bgColor}>
    <Column align="center">
      <HeaderText size="38" weight="700" color="#FFFFFF" align="center">
        {props.subhead}
      </HeaderText>
      <HeaderText size="80" weight="700" color="#FFFFFF" align="center">
        {props.header}
      </HeaderText>
      <PLarge
        as="div"
        color="#FFFFFF"
        align="center"
        dangerouslySetInnerHTML={{ __html: props.text }}
      />
      <Button hide={props.hideButton} dark to={props.dest}>
        {props.bText}
      </Button>
    </Column>
    <SummaryLeaf noLeaf={props.noLeaf} src={Leaf} alt="leaf" />
  </Block>
)
export default Summary
