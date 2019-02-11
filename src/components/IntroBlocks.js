import React from 'react'
import TwoColRow from '../components/TwoColRow'
import { Wrapper } from '../components/Block'
import { TextBlock } from '../components/TextBlocks'
import { Divider } from '../components/Lines'
import Column from '../components/Column'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Block = styled(Wrapper)``

const IntroBlocks = props => {
  const data = props.data.edges[0].node
  return (
    <div>
      <Fade duration={2000}>
        <TwoColRow bias="right">
          <Block padding="0" bgImage={data.mainImage.ogimg.src} />
          <Column>
            <TextBlock
              line="left"
              header={data.headerText1}
              inlineText={data.paragraphText1.childMarkdownRemark.html}
              bText={data.buttonText1}
              dest={'/' + data.buttonDestination1}
              theme="dark"
              bgColor="white"
            />
            <TextBlock
              header={data.headerText2}
              inlineText={data.paragraphText2.childMarkdownRemark.html}
              bText={data.buttonText2}
              dest={'/' + data.buttonDestination2}
              theme="light"
              bgColor="#394343"
              pushLeft
            />
          </Column>
        </TwoColRow>
      </Fade>
    </div>
  )
}
export default IntroBlocks
