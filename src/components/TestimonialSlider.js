import React from "react";
import Slider from "react-slick";
import styled from 'styled-components'
import { TwoColRowWrapper } from '../components/TwoColRow'
import { RowWrapper } from '../components/Row'
import Block from '../components/Block'
import { Text, HeaderText } from '../components/Headings'
import { ColumnWrapper } from '../components/Column'
import Branch from "!svg-react-loader!../images/svg-icons/branch.svg?name=branch";
import { createGlobalStyle } from 'styled-components'

const Wrapper = styled.div`
    position: relative;
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
            margin: 20px;

            }
            button {
                background-color: transparent;
                padding: 0;
                &::after {
                    content: "";
                    line-height: 0;
                    background-color: #1791AD;
                    padding: 5px;
                    border-radius: 5px;
                    color: #1791AD;
            }
        }
        
    }
`

const Quote = styled(Text)`
    @media ( max-width: 600px ){
        text-align: center;
    }
`

const Info = styled(HeaderText)`
    @media ( max-width: 600px ){
        text-align: center;
    }
`

const Icon = styled(Branch)`
    margin-top: 2%;
    width: 30%;
    @media ( max-width: 600px ){
        width: 10%;
        min-width: 41px;
    }
`

const Column = styled(ColumnWrapper)`
    padding-right: 5vw;
    @media ( max-width: 600px ){
        padding-right: 0;
    }
`

const TwoColRow = styled(TwoColRowWrapper)`
    padding: 700px 1250px ;
    @media ( max-width: 1440px ){
        padding: 12vw 10vw;
    }
    @media ( max-width: 600px ){
        padding: 10vw 5vw;
        text-align: center;
    }
    @media ( max-width: 450px ){
        padding: 50px 25px;
    }
`

const Row = styled(RowWrapper)`
    margin-top 20px;
    width: 100%;
    span {
        margin-right: 10px;
    }
    @media ( max-width: 600px ){
        justify-content: center;
    }
`
const Slash = styled.span`
    width: 10%;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        height: 1px;
        width: 120%;
        background-color: #FFFFFF;
        transform: rotate(-45deg);
        @media ( max-width: 600px ){
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
      autoplaySpeed: 2000,
      dotsClass: 'dots'
    };
    return (
        <Wrapper>
            <Slider {...settings}>
                <Block bgColor="#9DD5EA" padding="0" >
                    <TwoColRow bias="left">
                        <Column>
                            <Quote lHeight="1.3" size="34"> Noah works with his son. He uses very new and modern equipment. It is probably a combination of all these factors that allows him to have bid the job at less than one-half the other bids.</Quote>
                            <Row justify="flex-start" align="center" >
                                <Info as="span" color="#FFFFFF" size="42" weight="700">Ralph C.</Info>
                                <Slash />
                                <Info as="span" color="#FFFFFF" size="42">Reno, Nevada</Info>
                            </Row>
                        </Column>
                        <Block bgColor="transparent" padding="0">
                            <Info color="white" size="125">"Modern"</Info>
                            <Icon/>
                        </Block>
                    </TwoColRow>
                </Block>
                <Block bgColor="#9DD5EA" padding="0" >
                    <TwoColRow bias="left">
                        <Column>
                            <Quote lHeight="1.3" size="34"> Noah works with his son. He uses very new and modern equipment. It is probably a combination of all these factors that allows him to have bid the job at less than one-half the other bids.</Quote>
                            <Row justify="flex-start" align="center" >
                                <Info as="span" color="#FFFFFF" size="42" weight="700">Mary R.</Info>
                                <Slash />
                                <Info as="span" color="#FFFFFF" size="42">Tahoe, Nevada</Info>
                            </Row>
                        </Column>
                        <Block bgColor="transparent" padding="0">
                            <Info color="white" size="125">"Superb"</Info>
                            <Icon/>
                        </Block>
                    </TwoColRow>
                </Block>
            </Slider>
        <GlobalStyle />
    </Wrapper>
    );
  }
}