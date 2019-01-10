import React from 'react'
import styled from 'styled-components'
import Row from './Row'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Text = styled.div`
  font-size: 34px;
  font-family: 'Montserrat', sans-serif;
  color: #242424;
  line-height: 1.4;
`
const Details = styled.div`
  font-size: 42px;
  font-family: 'Tinos', serif;
  color: #FFFFFF;
  font-weight: 700;
  line-height: 1;
`

const SmallDetails = styled(Details)`
    font-weight: 400;
`

const Testimonial = props => {
    return (
        <Wrapper>
            <Text>
                {props.text}
            </Text>
            <Row>
                <Details>
                    {props.name}
                </Details>
                <SmallDetails>
                    {props.location}
                </SmallDetails>
            </Row>
        </Wrapper>
    )
}
export default Testimonial