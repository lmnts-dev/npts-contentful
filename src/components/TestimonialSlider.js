import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { TwoColRowWrapper } from '../components/TwoColRow'
import { RowWrapper } from '../components/Row'
import Block from '../components/Block'
import { Text, HeaderText } from '../components/Headings'
import { ColumnWrapper } from '../components/Column'
import Branch from '!svg-react-loader!../images/svg-icons/branch.svg?name=branch'
import { createGlobalStyle } from 'styled-components'
import Helmet from 'react-helmet'

const Wrapper = styled.div`
  position: relative;
  background-color: #9dd5ea;
`

const GlobalStyle = createGlobalStyle`
    .dots {
        position: absolute;
        right: 25px;
        top: 0;
        bottom: 0;
        z-index: 4;
        display: flex !important;
        flex-direction: column;
        justify-content: center;
        li {
            margin: 4px;
            button {
                content: "";
                background-color: transparent;
                padding: 0;
                border: none;
                color: #9DD5EA;
                font-size: 1px;
                cursor: pointer;
                &:focus {
                    outline: none;
                }
                &::after {
                    content: "";
                    line-height: 0;
                    background-color: #1791AD;
                    padding: 3.5px 4px;
                    border-radius: 50%;
                    color: #1791AD;
                }
            }
            &.slick-active {
                button {
                    &::after {
                        background-color: #293536;
                        color: #293536;
                    }
                }
            }
        }
    }
`

const Quote = styled(Text)`
  @media (max-width: 600px) {
    text-align: center;
  }
`

const Info = styled(HeaderText)`
  @media (max-width: 600px) {
    text-align: center;
  }
`

const Icon = styled(Branch)`
  margin-top: 2%;
  width: 30%;
  @media (max-width: 600px) {
    width: 10%;
    min-width: 41px;
  }
`

const Column = styled(ColumnWrapper)`
  padding-right: 5vw;
  @media (max-width: 600px) {
    padding-right: 0;
  }
`

const TwoColRow = styled(TwoColRowWrapper)`
  padding: 172.8px 144px;
  @media (max-width: 1440px) {
    padding: 12vw 10vw;
  }
  @media (max-width: 600px) {
    padding: 10vw 5vw;
    text-align: center;
  }
  @media (max-width: 450px) {
    padding: 50px 25px;
  }
`

const Row = styled(RowWrapper)`
  margin-top: 20px;
  width: 100%;
  span {
    margin-right: 10px;
  }
  @media (max-width: 600px) {
    justify-content: center;
  }
`
const Slash = styled.span`
  width: 10%;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 120%;
    background-color: #ffffff;
    transform: rotate(-45deg);
    @media (max-width: 600px) {
      left: 0;
    }
  }
`

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      dotsClass: 'dots',
    }
    return (
      <Wrapper>
        <Helmet>
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
        </Helmet>
        <Slider {...settings}>
          {this.props.data.map(({ node: image }, index) => {
            return (
              <Block key={index + ''} bgColor="#9DD5EA" padding="0">
                <TwoColRow bias="left">
                  <Column>
                    <Quote
                      lHeight="1.3"
                      size="30"
                      dangerouslySetInnerHTML={{
                        __html: this.props.data[index].node.customerReview
                          .childMarkdownRemark.html,
                      }}
                    />
                    <Row justify="flex-start" align="center">
                      <Info as="span" color="#FFFFFF" size="38" weight="700">
                        {this.props.data[index].node.firstName}{' '}
                        {this.props.data[index].node.lastInitial}.
                      </Info>
                      <Slash />
                      <Info as="span" color="#FFFFFF" size="38">
                        {this.props.data[index].node.city},{' '}
                        {this.props.data[index].node.state}
                      </Info>
                    </Row>
                  </Column>
                  <Block bgColor="transparent" padding="0">
                    <Info color="white" size="100">
                      {
                        this.props.data[
                          index
                        ].node.customerReview.childMarkdownRemark.html
                          .split('<strong>')[1]
                          .split('</strong>')[0]
                      }
                    </Info>
                    <Icon />
                  </Block>
                </TwoColRow>
              </Block>
            )
          })}
        </Slider>
        <GlobalStyle />
      </Wrapper>
    )
  }
}
