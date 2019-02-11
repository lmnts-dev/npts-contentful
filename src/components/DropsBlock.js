import React from 'react'
import styled from 'styled-components'
import { Wrapper } from './Block'
import { RowWrapper } from './Row'
import Column from './Column'
import Button from './Button'
import { PLarge, HeaderText } from './Headings'
import chip from '../images/chip.png'

const Block = styled(Wrapper)`
  padding: 160px 300px;
  @media (max-width: 2000px) {
    padding: 8vw 15vw;
  }
  @media (max-width: 500px) {
    padding: 10vw 10vw;
  }
`

const Chip = styled.img`
  position: absolute;
  z-index: 4;
  height: 250px;
  right: -2%;
  top: -5%;
  @media (max-width: 2000px) {
    height: 16vw;
  }
  @media (max-width: 600px) {
    height: 100px;
    top: -10%;
  }
`

const Row = styled(RowWrapper)`
  a {
    margin: 0 10px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    a {
      margin: 10px 0;
    }
  }
`

const DropsBlock = props => {
  return (
    <Block bgColor="#9DD5EA">
      <Column align="center">
        <HeaderText size="100" color="#293536" weight="700" align="center">
          {props.header}
        </HeaderText>
        <PLarge
          color="#293536"
          align="center"
          dangerouslySetInnerHTML={{ __html: props.text }}
        />
        <Row>
          <Button to="/firewood">Free firewood</Button>
          <Button to="/woodchips">Free wood chips</Button>
          <Chip src={chip} alt="leaf" />
        </Row>
      </Column>
    </Block>
  )
}

export default DropsBlock
