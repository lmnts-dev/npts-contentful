import React from 'react'
import styled from 'styled-components'
import StackedLogo from '!svg-react-loader!../images/svg-icons/logoStacked.svg?name=logoStacked'
import Contact from '../components/ContactForm'
import { RowWrapper } from '../components/Row'
import { TwoColRowWrapper } from '../components/TwoColRow'
import { ColumnWrapper } from '../components/Column'
import { Wrapper } from '../components/Block'
import { Text } from '../components/Headings'
import { LargeTextBlock } from './TextBlocks'
import { Link, StaticQuery, graphql } from 'gatsby'
import insta from '../images/instagram.png'
import fb from '../images/facebook.png'

const FooterLinks = styled(RowWrapper)`
  @media (max-width: 750px) {
    flex-direction: column;
  }
  div:last-of-type {
    @media (max-width: 750px) {
      margin-top: 40px;
    }
  }
`

const TwoColRow = styled(TwoColRowWrapper)`
  @media (max-width: 750px) {
    flex-direction: ${props => (props.reverse ? 'column' : 'column-reverse')};
    div:first-of-type {
      margin: 0 auto;
      div {
        margin: 0 auto 40px auto;
      }
    }
  }
`

const CopyWright = styled(Text)`
  position: relative;
  margin-top: 40px;
  font-size: 12px;
  flex: 1;
  @media (max-width: 1440px) {
  }
  @media (max-width: 750px) {
    text-align: center;
  }
`

const MainInfo = styled.div`
  flex-grow: 20 !important;
  @media (max-width: 750px) {
    margin-bottom: 0 !important;
  }
`

const Logo = styled(StackedLogo)`
  margin-bottom: 20px;

  width: 290px;
  @media (max-width: 1440px) {
    width: 20.14vw;
  }
  @media (max-width: 720px) {
    width: 145px;
  }
`
const Column = styled(ColumnWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 100px 0 0 144px;
  @media (max-width: 1440px) {
    padding: 5vw 0 0 10vw;
  }
  @media (max-width: 750px) {
    padding: 75px 25px 0 25px;
    align-items: center;
  }
`

const Block = styled(Wrapper)`
  z-index: 3;
  padding: 100px 144px 0 144px;
  @media (max-width: 1440px) {
    padding: 5vw 10vw 0 10vw;
  }
  @media (max-width: 750px) {
    padding: 36px 72px 72px 72px;
  }
  @media (max-width: 400px) {
    padding: 36px 25px 72px 25px;
  }
`
const Social = styled.a`
  img {
    height: 48px;
    margin: 5%;
    @media (max-width: 1440px) {
      height: 3.33vw;
    }
    @media (max-width: 720px) {
      height: 24px;
      margin: 25px 12px 0 12px;;
    }
  }
`

const Item = styled(Link)`
  font-size: 28px;
  @media (max-width: 1440px) {
    font-size: 1.94vw;
  }
  @media (max-width: 720px) {
    font-size: 14px;
  }
  font-weight: 700;
  display: block;
  transition: all 0.2s;
  color: #7c7c7c;
  text-decoration: none;
  margin-right: ${props => (props.last === 'true' ? '0' : '80px')};
  @media (max-width: 1440px) {
    margin-right: ${props => (props.last === 'true' ? '0' : '5.56vw')};
  }
  @media (max-width: 750px) {
    margin: 0;
    text-align: center;
  }
  line-height: 1.5;
  &:hover {
    color: #7c7c7c;
  }
  &:visited {
    color: #7c7c7c;
  }
`

const Links = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allContentfulNav {
            edges {
              node {
                footerMenu
                showFacebookLink
                showInstagramLink
              }
            }
          }
        }
      `}
      render={data => {
        const primaryLinks = data.allContentfulNav.edges[0].node.footerMenu.slice(0, 3);
        const secondaryLinks = data.allContentfulNav.edges[0].node.footerMenu.slice(3);
        const showFb = data.allContentfulNav.edges[0].node.showFacebookLink
        const showInsta = data.allContentfulNav.edges[0].node.showInstagramLink
        return (
          <>
            <div>
              {
                primaryLinks.map(({ node: nav }, index) => {
                  var link = primaryLinks[index].replace(/[^a-z0-9]/gi, '-').toLowerCase()
                  if (link === "let-s-talk") {
                    link = "contact"
                  }
                  if (link === "home") {
                    link = ""
                  }
                  return (
                    <Item key={index} to={"/" + link}>{primaryLinks[index]}</Item>
                  )
                })
              }
            </div>
            <div>
              {
                secondaryLinks.map(({ node: nav }, index) => {
                  var link = secondaryLinks[index].replace(/[^a-z0-9]/gi, '-').toLowerCase()
                  if (link === "let-s-talk") {
                    link = "contact"
                  }
                  if (link === "home") {
                    link = ""
                  }
                  return (
                    <Item key={index} last="true" to={"/" + link}>
                      {secondaryLinks[index]}
                    </Item>
                  )
                })
              }            
              { showFb &&
                <Social href="https://www.facebook.com/NoahsParkTreeCare/">
                  <img src={fb} />
                </Social>
              }
              {showInsta &&
                <Social href="https://www.instagram.com/noahsparktreecare/">
                  <img src={insta} />
                </Social>
              }
            </div> 
          </>
        )
      }}
    />
  )
}





const Footer = props => {


  return (
  <TwoColRow as="footer">
    <Column justify="flex-start">
        <MainInfo>
          <Logo />
          <FooterLinks>
              <Links />
          </FooterLinks>
        </MainInfo>
        <CopyWright color="#343434">
          © {new Date().getFullYear()} Noah's Park Tree Care
        </CopyWright>
      </Column>
    <>
      {props.alt ? (
        <LargeTextBlock
          header="Our Work"
          inlineText=" Learn more about our values, review some testimonials and look through our portfolio."
          bText="Learn more"
          dest="/our-work"
          theme="light"
          bgColor="#9F4300"
          pushUp
        />
      ) : (
        <Block pushUp bgColor="#272929">
          <Contact noExit={props.noExit} />
        </Block>
      )}
    </>
  </TwoColRow>
  )
}
export default Footer
