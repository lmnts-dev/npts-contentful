import React from 'react'
import styled from 'styled-components'
import PageBody from '../components/PageBody'
import Button from '../components/Button'
import { H3, PLarge } from '../components/Headings'
import { ColumnWrapper } from '../components/Column'
import Planting from '../images/planting.jpg'
import { Wrapper } from '../components/Block'
import Fade from 'react-reveal/Fade';
import * as lmnts from '../data/Styles'

const Text = styled(PLarge)`
    margin-bottom: 0;
`

const Header = styled(H3)`
    margin-bottom: 30px;
    @media (max-width: 2000px) {
        margin-bottom: 1.5vw;
    }
    @media (max-width: 600px ) {
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
    margin: 15vw .5vw 0 .5vw;
  }
`


const ServiceBlock = props => (  
        <Fade big cascade when={true}>
            <Column>
                <Fade big cascade when={true}>
                    <a href={props.dest}>
                        <Header as="h2" weight="700">
                            {props.header}
                        </Header>
                    </a>
                </Fade>
                <Link href={props.dest}>
                    <Image padding="0" bgImage={props.src}/>
                </Link>
                <Text color="#293536" dangerouslySetInnerHTML={{ __html: props.text.childMarkdownRemark.html }}/>
                <Button arrowButton dark to={props.dest}>
                    {props.bText}
                </Button>
            </Column>
        </Fade>
    )
export default ServiceBlock