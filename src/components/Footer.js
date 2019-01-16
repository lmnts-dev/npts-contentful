import React from 'react'
import styled from 'styled-components'
import StackedLogo from "!svg-react-loader!../images/svg-icons/logoStacked.svg?name=logoStacked";
import Contact from '../components/ContactForm'
import Row from '../components/Row'
import TwoColRow from '../components/TwoColRow'
import { ColumnWrapper } from '../components/Column'
import { Wrapper } from '../components/Block'
import { H1, H2, H3, P, PLarge, Text, HeaderText } from '../components/Headings'

const CopyWright = styled(Text)`
  margin-top: 40px;
  font-size: 12px;
`

const Logo = styled(StackedLogo)`
  margin-bottom: 20px;

    width: 290px;
    @media (max-width: 1440px){
      width: 20.14vw;
    }
    @media (max-width: 720px){
      width: 145px;
    }
`
const Column = styled(ColumnWrapper)`
  padding: 100px 0 100px 144px;
  @media (max-width: 1440px){
    padding: 5vw 0 5vw 10vw;
  }
  @media (max-width: 720px){
    padding: 36px 0 36px 72px;
  }  
`

const Block = styled(Wrapper)`
  z-index: 3;
`

const Item = styled.a`
    font-size: 28px;
    @media (max-width: 1440px){
      font-size: 1.94vw;
    }
    @media (max-width: 720px){
      font-size: 14px;
    }
    font-weight: 700;
    display: block;
    transition: all 0.2s;
    color: #7C7C7C;
    text-decoration: none;
    margin-right: 80px;
    @media (max-width: 1440px){
      margin-right: 5.56vw;
    }
    @media (max-width: 720px){
      margin-right: 40px;
    }
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
    <Column justify="flex-start" >
      <Logo />
      <Row>
        <div>
          <Item href="/">Home</Item>
          <Item href="/">Services</Item>
          <Item href="/">About</Item>
          <Item href="/">Contact</Item>
          <Item href="/">Our Work</Item>
        </div>
        <div>
          <Item href="/">Chip Drop</Item>
          <Item href="/">Careers</Item>
        </div>
      </Row>
      <CopyWright color="#343434">
        © 2018 Noah's Park Tree Care
      </CopyWright>
    </Column>
    <Block pushUp bgColor="#272929">
      <HeaderText> Let's Talk </HeaderText>
      <HeaderText>  775.376.0917 </HeaderText>
      <HeaderText> noahsparktreecare@gmail.com </HeaderText>
      <Contact/>
    </Block>
  </TwoColRow>
)
export default Footer