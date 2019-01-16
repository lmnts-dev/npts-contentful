


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
  font-size: 83.5px;
  @media ( max-width: 1440px ){
    font-size: 5.8vw;
  }
  @media ( max-width: 600px ){
    font-size: 34.8px;
  }
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
  @media ( max-width: 1440px ){
    font-size: 3.89vw;
  }
  @media ( max-width: 600px ){
    font-size:23.34px;
  }
  line-height: 1.1;
  margin: 0;
  padding: 0;
  font-family: 'Tinos', serif;
  font-weight: ${props => props.weight || '700'};
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || '#000000'};
`;

export const H3 = styled.h3`
  display: inline-block;
  font-size: 80px;
  @media ( max-width: 1440px ){
    font-size: 5.56vw;
  }
  @media ( max-width: 600px ){
    font-size: 33.36px;
  }
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
  @media ( max-width: 1440px ){
    font-size: 1.25vw;
  }
  @media ( max-width: 1120px ){
    font-size: 14px;
  }
  line-height: 2;
  margin: ${props => props.margin || '20px 0'};
  padding: 0;
  font-family: 'Monserrat', sans-serif;
  font-weight: ${props => props.weight || '400'};
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || '#000000'};
  text-transform: ${props => props.transform || ''};
`;

export const PLarge = styled(P)`
  font-size: 22px;
  @media ( max-width: 1440px ){
    font-size: 1.53vw;
  }
  @media ( max-width: 1047px ){
    font-size: 16px;
  }
  line-height: 1.8;
`

export const Text = styled.div`
  color: ${props => props.color || '#000000'};
  padding: ${props => props.padding|| '0'};
  line-height: ${props => props.lHeight || '1'};
  text-align: ${props => props.align || 'left'};
  font-weight: ${props => props.weight || '400'};
  text-transform: ${props => props.transform || ''};
  font-family: 'Montserrat', sans-serif;
  ${props => {
    /* text adjustments for responsiveness */
    if (props.size === "34") return ` 
      font-size: 34px;
      @media ( max-width: 1440px ){
        font-size: 2.36vw;
      }
      @media ( max-width: 600px ){
        font-size: 14.16px;
      }
    `
    if (props.size === "18") return ` 
      font-size: 18px;
      @media ( max-width: 1440px ){
        font-size: 1.25vw;
      }
      @media ( max-width: 1120px ){
        font-size: 14px;
      }
    `
    if (props.size === "12") return ` 
      font-size: 12px;
  `
  }}
`
export const HeaderText = styled(Text)`
    font-family: 'Tinos', serif;
    ${props => {
      if (props.size === "42") return ` 
      font-size: 42px;
      @media ( max-width: 1440px ){
        font-size: 2.92vw;
      }
      @media ( max-width: 1120px ){
        font-size: 17.52px;
      }
    `
    if (props.size === "100") return ` 
      font-size: 100px;
      @media ( max-width: 1440px ){
        font-size: 6.94vw;
      }
      @media ( max-width: 1120px ){
        font-size: 41.64px;
      }
    `
    if (props.size === "125") return ` 
      font-size: 125px;
      @media ( max-width: 1440px ){
        font-size: 8.68vw;
      }
      @media ( max-width: 1120px ){
        font-size: 82.46px;
      }
      @media ( max-width: 600px ){
        font-size: 60px;
      }
    `
    if (props.size === "80") return `
      font-size: 80px;
      @media ( max-width: 1440px ){
        font-size: 5.56vw;
      }
      @media ( max-width: 600px ){
        font-size: 33.36px;
      }
    `
  }}
`