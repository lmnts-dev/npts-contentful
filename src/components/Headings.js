


import React from 'react'
import styled from 'styled-components'

/* these are what you can call ////////////////

STILL NEED TO DO SPECIFIC Text PADDING SIZES FOR RESPONSIVENESS

<H1 weight="700" align="center" color="white"></H1>
<H2 weight="700" align="center" color="white"></H2>
<H3 weight="700" align="center" color="white"></H3>
<P weight="700" align="center" color="white"></P>
<PLarge weight="700" align="center" color="white"></PLarge>
<Text color="white" padding=" 20px 0" size="large" lHeight="1.4" align="1" weight="700"></Text>
<HeaderText color="white" padding=" 20px 0" size="large" lHeight="1.4" align="1" weight="700"></HeaderText>

///////////////////////////////////////////////////////// */

export const H1 = styled.h1`
  font-size: 90px;
  line-height: 1.1;
  margin: 0;
  padding: 0;
  font-family: 'Tinos', serif;
  font-weight: ${props => props.weight || '400'};
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || '#000000'};
`;

export const H2 = styled.h2`
  display: inline-block;
  font-size: 56px;
  line-height: 1.1;
  margin: 0;
  padding: 0;
  font-family: 'Tinos', serif;
  font-weight: ${props => props.weight || '400'};
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || '#000000'};
`;

export const H3 = styled.h3`
  display: inline-block;
  font-size: 80px;
  line-height: 1;
  margin: 0;
  padding: 0;
  font-family: 'Tinos', serif;
  font-weight: ${props => props.weight || '700'};
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || '#000000'};
`;

export const P = styled.p`
  font-size: 18px;
  line-height: 2;
  margin: 20px 0;
  padding: 0;
  font-family: 'Monserrat', sans-serif;
  font-weight: ${props => props.weight || '400'};
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || '#000000'};
`;

export const PLarge = styled(P)`
  font-size: 22px;
  line-height: 1.8;
`

export const Text = styled.div`
  width: 100% !important;
  color: ${props => props.color || '#000000'};
  padding: ${props => props.padding|| '0'};
  font-size: ${props => props.size || '36px'};
  line-height: ${props => props.lHeight || '1'};
  text-align: ${props => props.align || 'center'};
  font-weight: ${props => props.weight || '400'};
  font-family: 'Montserrat', sans-serif;
`
export const HeaderText = styled(Text)`
    font-family: 'Tinos', serif;
`