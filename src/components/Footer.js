import React from 'react'
import styled from 'styled-components'
import StackedLogo from "!svg-react-loader!../images/svg-icons/logoStacked.svg?name=logoStacked";
import Contact from '../components/ContactForm'
import { Row, RowWrapper } from '../components/Row'
import { TwoColRowWrapper } from '../components/TwoColRow'
import { ColumnWrapper } from '../components/Column'
import { Wrapper } from '../components/Block'
import { H1, H2, H3, P, PLarge, Text, HeaderText } from '../components/Headings'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const FooterLinks = styled(RowWrapper)`
    @media ( max-width: 750px ){
      flex-direction: column;
    }
    div:last-of-type {
      margin-top: 40px;
    }
`

const TwoColRow = styled(TwoColRowWrapper)`
  @media ( max-width: 750px ){
    flex-direction: ${props => props.reverse ? 'column' : 'column-reverse' };
  }
`

const CopyWright = styled(Text)`
  position: absolute;
  bottom: 50px;
  left: 144px;
  margin-top: 40px;
  font-size: 12px;
  @media (max-width: 1440px){
    left: 10vw;
  }
  @media (max-width: 750px){
    left: 0;
    right: 0;
    bottom: 25px;
    text-align: center;
  }  
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
  @media (max-width: 750px){
    padding: 75px 25px 100px 25px;
    align-items: center;
  }  
`

const Block = styled(Wrapper)`
  z-index: 3;
  padding: 100px 144px 0 144px;
  @media (max-width: 1440px){
    padding: 5vw 10vw 0 10vw;
  }
  @media (max-width: 750px){
    padding: 36px 72px 72px 72px;
  } 
  @media (max-width: 400px){
    padding: 36px 25px 72px 25px;
  }
`
const Info = styled(Text)`
  cursor: pointer;
  text-decoration: none !important;
`

const Item = styled(AniLink)`
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
    @media (max-width: 750px){
      margin: 0;
      text-align: center;
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
      <FooterLinks>
        <div>
          <Item to="/">Home</Item>
          <Item to="/services">Services</Item>
          <Item to="/about">About</Item>
          <Item to="/">Contact</Item>
          <Item to="/">Our Work</Item>
        </div>
        <div>
          <Item to="/">Chip Drop</Item>
          <Item to="/">Careers</Item>
        </div>
      </FooterLinks>
      <CopyWright color="#343434">
        © 2018 Noah's Park Tree Care
      </CopyWright>
    </Column>
    <Block pushUp bgColor="#272929">
      <Contact/>
    </Block>
  </TwoColRow>
)
export default Footer