import React from 'react'
import { TwoColRowWrapper } from './TwoColRow'
import styled from 'styled-components'
import Button from './Button'
import { Row, RowWrapper } from './Row'
import { Wrapper, Block } from './Block'
import { H1, P, Text } from './Headings'
import { Border } from './Lines'
import { ColumnWrapper } from './Column'
import SVG from "!svg-react-loader!../images/svg-icons/badge.svg?name=badge";
import lArrow from "!svg-react-loader!../images/svg-icons/arrowLeft.svg?name=arrow";
import rArrow from "!svg-react-loader!../images/svg-icons/arrowRight.svg?name=arrow";
import Locator from "!svg-react-loader!../images/svg-icons/locator.svg?name=locator";
import SlideOne from "../images/slider1.jpg"
import slider from "react-slick";

/* height is 100vh - body's top padding of 1.8vw */
const TwoColRow = styled(TwoColRowWrapper)`
  height: calc(100vh - 36px);
  min-height: 800px;
  @media (max-width: 2000px) {
    height: calc(100vh - 1.8vw);
  }
  @media (max-width: 1440px) {
    min-height: 850px;
  }
  @media (max-width: 900px) {
    min-height: 750px;
  }
  @media (max-width: 600px) {
    min-height: 550px;
  }
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`
/* height is 100vh - body's top padding of 1.8vw */
const Slider = styled(slider)`
  height: calc(100vh - 36px);
  min-height: 800px;
  @media (max-width: 2000px) {
    height: calc(100vh - 1.8vw);
  }
  @media (max-width: 1440px) {
    min-height: 850px;
  }
  @media (max-width: 900px) {
    min-height: 750px;
  }
  @media (max-width: 600px) {
    min-height: 550px;
  }
  z-index: 1;
`
const SliderImage = styled(Wrapper)`
  height: calc(100vh - 36px);
  min-height: 800px;
  @media (max-width: 2000px) {
    height: calc(100vh - 1.8vw);
  }
  @media (max-width: 1440px) {
    min-height: 850px;
  }
  @media (max-width: 900px) {
    min-height: 750px;
  }
  width: 100%;
  @media (max-width: 600px) {
    height: 100vh !important;
    min-height: 550px;
  }
`

const DisclaimerCol = styled(ColumnWrapper)`
    
`

const SliderNav = styled(ColumnWrapper)`
    margin: 12px;
`

const LeftArrow = styled(lArrow)`
    width: 50px;
    height: 50px;
    padding: 15px;
    background-color: #FFFFFF;
    cursor: pointer;
`

const RightArrow = styled(rArrow)`
  width: 50px;
  height: 50px;
  padding: 15px;
  background-color: #ffffff;
  margin-bottom: 2px;
  cursor: pointer;
`


const HeroBorder = styled(Border)`
    margin: 28.8 0;
    @media (max-width: 1440px){
        margin: 2vw 0;
    }
    @media (max-width: 600px){
        margin: 12px 0;
    }  
`
const Badge = styled(SVG)`
    width: 5vw;
    margin-right: 1.5vw;
    margin-top: 5vw;
    @media ( max-width: 450px ){
        width: 7vw;
        margin-right: 10px;
    }
`

const WordsBlock = styled(Wrapper)`
    padding: 150px 5vw 0 5vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media ( max-width: 600px ){
        padding: 100px 25px 0 25px; 
    }
`

const NavBlock = styled(Wrapper)`
    @media ( max-width: 600px ){
        display: none;
    }
`

const Disclaimer = styled(Text)`
    margin-top: 5vw;
    @media ( max-width: 450px ){
        font-size: 9px;
    }
`

const Container = styled.div`
    position: relative;
`

const LocatorRow = styled(RowWrapper)`
    margin: 12px;
    font-size: 12px;
    svg {
        margin-right: 12px;
    }
`

export default class HomeSlider extends React.Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
      };

      return (
    <Container>
        <TwoColRow bias="left">
            <WordsBlock bgColor="rgba(0, 0, 0, .6)" absolute="left">
                <div>
                    <H1 color="#FFFFFF" >Keeping your trees healthy and beautiful</H1>
                    <HeroBorder color="white" width="90%" margin="40px 0"/>
                    <P color="white" >Dedicated to handling all your tree care needs, our experienced and knowledgeable team of arborists are committed to ensure the longevity of all your trees and shrubs.</P>
                    <Button to="/">Get a free quote</Button>
                </div>
                <DisclaimerCol align="flex-start">
                    <Row justify="flex-start" align="center">
                        <Badge />
                        <Disclaimer size="12" lHeight="1.8" color="#FFFFFF">As an ISA Certified Arborist, all of our work is performed to ISA standards and we are fully insured to operate in the area.</Disclaimer>
                    </Row>
                </DisclaimerCol>
            </WordsBlock>
            <NavBlock absolute="right" bgColor="transparent" padding="0">
                <Row justify="space-between">
                    <LocatorRow absolute="bottomLeft" align="center">
                        <Locator />
                        <Text color="#FFFFFF" weight="300" transform="uppercase" >Reno, NV</Text>
                    </LocatorRow>
                    <SliderNav absolute="bottomRight">
                        <RightArrow onClick={this.previous}/>
                        <LeftArrow onClick={this.next}/>
                    </SliderNav>
                </Row>
            </NavBlock>
        </TwoColRow>
        <Slider ref={c => (this.slider = c)} {...settings}>
            <SliderImage bgImage={SlideOne} padding="0"></SliderImage>
            <SliderImage bgImage={SlideOne} padding="0"></SliderImage>
            <SliderImage bgImage={SlideOne} padding="0"></SliderImage>
        </Slider>    
    </Container>
    );
}
}
