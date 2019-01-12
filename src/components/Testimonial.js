import React from 'react'
import styled from 'styled-components'

const DetailsRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 40px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => (props.margin ? '0 20px 0 0' : '0')};
`

const Text = styled.div`
  font-size: 34px;
  font-family: 'Montserrat', sans-serif;
  color: #242424;
  line-height: 1.4;
`

const Details = styled.span`
  font-size: 42px;
  font-family: 'Tinos', serif;
  color: #FFFFFF;
  font-weight: 700;
  line-height: 1;
  position: relative;
  display: inline-block !important;
`

const Slash = styled.span`
  position: relative;
  width: 50px;
  margin: 0 20px;
  &::after {
    content: '';
    width: 1px;
    height: 150%;
    top: -25%;
    right: 50%;
    transform: rotate(45deg);
    background-color: #ffffff;
    position: absolute;
  }
`

const SmallDetails = styled(Details)`
    font-weight: 400;
`

const Testimonial = props => {
    return (
        <Wrapper margin={props.responsiveMargin}>
            <Text>
                {props.text}
            </Text>
            <DetailsRow>
                <Details slash> 
                    {props.name}
                </Details>
                <Slash/>
                <SmallDetails>
                    {props.location}
                </SmallDetails>
            </DetailsRow>
        </Wrapper>
    )
}
export default Testimonial