import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { RowWrapper } from '../components/Row'
import styled from 'styled-components'
import { H2, P } from '../components/Headings'
import leaf from '../images/leafTestimonial.png'
import { RightToMidLeaf } from '../components/Leaves'
import { Divider } from '../components/Lines'
 

const RightLeaf = styled(RightToMidLeaf)`
  bottom: auto;
  top: -37%;
  @media (max-width: 1000px) {
    top: -20%;
    right: -12%;
  }
  @media (max-width: 600px) {
    height: 200px;
    top: -20%;
    bottom: auto;
    right: -10%;
    left: auto;
  }
`

const Row = styled(RowWrapper)`
  position: relative;
  div:first-of-type {
    height: 675px !important;
    width: 1200px !important;
    @media (max-width: 2000px) {
      height: 33.75vw !important;
      width: 60vw !important;
    }
  }
  @media (max-width: 1000px){
    flex-direction: column-reverse;
    div:first-of-type {
      width: 96.4vw !important;
      height: 54.225vw !important;
    }
  }
`

const Holder = styled.span `
  display: block;
`

const Block = styled.div`
  background-color: #9f4300;

  padding: 0 120px;
  height: 675px;
  width: 728px;
  @media (max-width: 2000px) {
    width: 36.4vw;

    height: 33.75vw;
    padding: 0 6vw;
  }
  display: flex;
  flex-direction: column;
  jusitfy-content: center;
  span {
    margin: auto 0;
    p {
      margin-bottom: 0;
    }
  }
  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
    padding: 10vw 10vw;
    span {
      margin: 0;
    }
  }
  @media (max-width: 700px) {
    padding: 80px;
  }
  @media (max-width: 450px) {
    padding: 64px 25px;
  }
`

export default class App extends Component {
  render () {
      return (
      <div>
          <Divider />
            <Row>
                <ReactPlayer url="https://www.dropbox.com/s/c2dswh5v23q7g24/NPTC_proof2.mp4?dl=0" loop height="33.75vw" width="60vw" controls />
                <Block bgColor="#9F4300">
                  <Holder>
                    <H2 color="#FFFFFF">
                      The reel deal, see our process in action
                    </H2>
                    <P color="#FFFFFF">
                      Watch a pine tree taller than 100ft get removed quickly and
                      safely. Plus, you’ll get a couple slow-mo chain saw shots in
                      there too.
                    </P>
                </Holder>
                </Block>
                <RightLeaf src={leaf}/>
              </Row>
        </div>
      )
  }
}