import React from 'react'
import styled from 'styled-components'
import * as lmnts from '../data/Styles'

/* these are what you can call ////////////////

<H1 weight="700" align="center" color="white"></H1>
<H2 weight="700" align="center" color="white"></H2>
<H3 weight="700" align="center" color="white"></H3>
<P weight="700" align="center" color="white"></P>
<PLarge weight="700" align="center" color="white"></PLarge>
<Text color="white" padding=" 20px 0" size="large" lHeight="1.4" align="1" weight="700"></Text>
<HeaderText color="white" padding=" 20px 0" size="large" lHeight="1.4" align="1" weight="700"></HeaderText>

///////////////////////////////////////////////////////// */

export const H1 = styled.h1`
  font-size: 65px;
  @media ( max-width: 1440px ){
    font-size: 4.51vw;
  }
  @media ( max-width: 600px ){
    font-size: 27.1px;
  }
  line-height: 1.1;
  margin: 0;
  padding: 0;
  font-family: ${lmnts.Fnt.Header};
  font-weight: ${props => props.weight || '400'};
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || '#000000'};
`;

export const H2 = styled.h2`
  display: inline-block;
  font-size: 50.4px;
  @media ( max-width: 1440px ){
    font-size: 3.5vw;
  }
  @media ( max-width: 600px ){
    font-size: 21.1px;
  }
  line-height: 1.1;
  margin: 0;
  padding: 0;
  font-family: ${lmnts.Fnt.Header};
  font-weight: ${props => props.weight || '700'};
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || '#000000'};
`;

export const H3 = styled.h3`
  display: inline-block;
  letter-spacing: .03em;
  font-size: 72px;
  @media ( max-width: 1440px ){
    font-size: 5vw;
  }
  @media ( max-width: 600px ){
    font-size: 30px;
  }
  line-height: 1;
  margin: 0;
  padding: 0;
  font-family: ${lmnts.Fnt.Header};
  font-weight: ${props => props.weight || '700'};
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || '#000000'};
`;

export const P = styled.p`
  font-size: 16px;
  @media ( max-width: 1440px ){
    font-size: 1.11vw;
  }
  @media ( max-width: 1260px ){
    font-size: 14px;
  }
  line-height: 2;
  margin: ${props => props.margin || '20px 0'};
  padding: 0;
  font-family: ${lmnts.Fnt.Body};
  font-weight: ${props => props.weight || '400'};
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || '#000000'};
  text-transform: ${props => props.transform || ''};
  p {
    margin-bottom: 1.3vw;
    @media ( max-width: 1047px ){
      margin-bottom: 12px;
    }
  }
`;

export const PLarge = styled(P)`
  font-size: 20px;
  @media ( max-width: 1440px ){
    font-size: 1.38vw;
  }
  @media ( max-width: 1085px ){
    font-size: 15px;
  }
  line-height: 1.8;
  p {
    margin-bottom: 1.5vw;
    @media ( max-width: 1047px ){
      margin-bottom: 15.7px;
    }
  }
`

export const Text = styled.div`
  color: ${props => props.color || '#000000'};
  padding: ${props => props.padding|| '0'};
  line-height: ${props => props.lHeight || '1'};
  text-align: ${props => props.align || 'left'};
  font-weight: ${props => props.weight || '400'};
  text-transform: ${props => props.transform || ''};
  font-family: ${lmnts.Fnt.Body};
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
    if (props.size === "30") return ` 
      font-size: 30px;
      @media ( max-width: 1440px ){
        font-size: 2.08vw;
      }
      @media ( max-width: 770px ){
        font-size: 16px;
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
    if (props.size === "16") return ` 
      font-size: 16px;
      @media ( max-width: 1440px ){
        font-size: 1.11vw;
      }
      @media ( max-width: 1260px ){
        font-size: 14px;
      }
    `
    if (props.size === "12") return ` 
      font-size: 12px;
  `
  }}
`
export const HeaderText = styled(Text)`
    font-family: ${lmnts.Fnt.Header};
    ${props => {
      if (props.size === "38") return ` 
        font-size: 38px;
        @media ( max-width: 1440px ){
          font-size: 2.64vw;
        }
        @media ( max-width: 600px ){
          font-size: 15.85px;
        }
      `
      if (props.size === "42") return ` 
      font-size: 42px;
      @media ( max-width: 1440px ){
        font-size: 2.92vw;
      }
      @media ( max-width: 600px ){
        font-size: 17.52px;
      }
    `
    if (props.size === "100") return ` 
      font-size: 100px;
      @media ( max-width: 1440px ){
        font-size: 6.94vw;
      }
      @media ( max-width: 600px ){
        font-size: 41.7px;
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
    if (props.size === "72") return `
      font-size: 72px;
      @media(max-width: 1440px) {
        font-size: 5vw;
      }
      @media(max-width: 600px) {
        font-size: 30px;
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