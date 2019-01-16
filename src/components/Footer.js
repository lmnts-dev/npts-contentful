import React from 'react'
import styled from 'styled-components'
import StackedLogo from "!svg-react-loader!../images/svg-icons/logoStacked.svg?name=logoStacked";
import Contact from '../components/ContactForm'
import Row from '../components/Row'
import TwoColRow from '../components/TwoColRow'
import Column from '../components/Column'
import { H1, H2, H3, P, PLarge, Text, HeaderText } from '../components/Headings'

const Item = styled.a`
    font-weight: 700;
    transition: all 0.2s;
    color: #7C7C7C;
    text-decoration: none;
    line-height: 1.5;
    &:hover {
      color: #7C7C7C;
    }
    &:visited {
      color: #7C7C7C;
  }
`

const Footer = () => (
  <TwoColRow as="footer">
    <Column>
      <StackedLogo />
      <Row>
        <Column>
          <Item href="/">Home</Item>
          <Item href="/">Services</Item>
          <Item href="/">About</Item>
          <Item href="/">Contact</Item>
          <Item href="/">Our Work</Item>
        </Column>
        <Column>
          <Item href="/">Chip Drop</Item>
          <Item href="/">Careers</Item>
        </Column>
      </Row>
      <Text size="16px" color="##343434">
        © 2018 Noah's Park Tree Care
      </Text>
    </Column>
    <Column>
      <Contact/>
    </Column>
  </TwoColRow>
)
export default Footer