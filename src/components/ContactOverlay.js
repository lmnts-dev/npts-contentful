import React from 'react'
import styled from 'styled-components'
import PageBody from '../components/PageBody'
import Button from '../components/Button'
import { H3, PLarge, HeaderText, Text } from '../components/Headings'
import { ColumnWrapper } from '../components/Column'
import exit from '../images/exit.png'
import { Wrapper } from '../components/Block'
import Contact from '../components/ContactForm'
import { Row, RowWrapper } from '../components/Row'


const Center= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const Block = styled(Wrapper)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 150;
  padding: 0 4vw;
  margin: 0 auto;
  display: none;
  form {
    margin-top: 0;
  }
`

const Image = styled.img`
  position: absolute;
  left: 20%;
  top: 20%;
  width: 60%;
  height: 60%;
`

const Exit = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 66px;
  width: 66px;
  margin: 4vw;
  @media (max-width: 600px){
      height: 51px;
      width: 51px;
  }
  background-color: #363636;
`

const ServiceBlock = props => (
  <Block bgColor="#272929">
    <Exit onclick="closeContact()">
        <Image src={exit} />
    </Exit>
    <Center>
        <Contact />
    </Center>
  </Block>
)
export default ServiceBlock