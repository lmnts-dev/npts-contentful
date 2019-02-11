import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { PLarge } from '../components/Headings'
import { ColumnWrapper } from '../components/Column'
import { Wrapper } from '../components/Block'
import Fade from 'react-reveal/Fade'
import { HeaderText } from '../components/Headings'

const Text = styled(PLarge)`
  margin-bottom: 0;
`

const Header = styled(HeaderText)`
  text-decoration: none !important;
  margin-bottom: 30px;
  @media (max-width: 2000px) {
    margin-bottom: 1.5vw;
  }
  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
`

const Image = styled(Wrapper)`
  height: 500px;
  @media (max-width: 2000px) {
    height: 25vw;
  }
  min-height: 300px;
`
const Link = styled.a`
  height: 500px;
  width: 100%;
  text-decoration-line: none !important;
  @media (max-width: 2000px) {
    height: 25vw;
  }
  min-height: 300px;
`

const Column = styled(ColumnWrapper)`
  margin: 160px 10px 0px 10px;
  @media (max-width: 2000px) {
    margin: 8vw 0.5vw 0 0.5vw;
  }
  @media (max-width: 600px) {
    margin: 15vw 0.5vw 0 0.5vw;
  }
`

const ServiceBlock = props => (
  <Fade big cascade>
    <Column>
      <Fade big cascade>
        <Link href={props.dest}>
          <Header as="h2" weight="700" size="42">
            {props.header}
          </Header>
        </Link>
      </Fade>
      <Link href={props.dest}>
        <Image padding="0" bgImage={props.src} />
      </Link>
      <Text
        color="#293536"
        dangerouslySetInnerHTML={{
          __html: props.text.childMarkdownRemark.html,
        }}
      />
      <Button arrowButton dark to={props.dest}>
        {props.bText}
      </Button>
    </Column>
  </Fade>
)
export default ServiceBlock
