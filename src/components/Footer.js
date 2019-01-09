import React from 'react'
import styled from 'styled-components'
import StackedLogo from "!svg-react-loader!../images/svg-icons/logoStacked.svg?name=logoStacked";
import { Link } from 'gatsby'

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  display: block;
  height: 100%;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const List = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 28px;
`
const Copywright = styled.div`
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
`

const Item = styled.li`
  font-weight: 700;
  a {
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
  }
`

const Footer = () => (
  <Wrapper>
    <Row>
      <StackedLogo />
    </Row>
    <Row>
      <List>
        <Item>
          <Link to="/" >
            Home
          </Link>
        </Item>
        <Item>
          <Link to="/services" >
            Services
          </Link>
        </Item>
        <Item>
          <Link to="/about" >
            About
          </Link>
        </Item>
        <Item>
          <Link to="/contact" >
            Contact
          </Link>
        </Item>
        <Item>
          <Link to="/porfolio" >
            Our Work
          </Link>
        </Item>
      </List>
      <List>
        <Item>
          <Link to="/chip-drop" >
            Chip Drop
          </Link>
        </Item>
        <Item>
          <Link to="/careers" >
            Careers
          </Link>
        </Item>
      </List>
    </Row>
    <Row>
      <Copywright>
        © 2018 Noah's Park Tree Care
      </Copywright>
    </Row>
  </Wrapper>
)
export default Footer