import { createGlobalStyle } from 'styled-components'
import * as lmnts from '../data/Styles'

const GlobalStyle = createGlobalStyle`
  .tl-wrapper {
    position: relative !important;
  }
  /* Reset CSS */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    overflow-x: hidden;
    max-width: 2000px;
    margin: 0 auto;
    padding: 36px;
    position: relative;
    @media (max-width: 2000px){
      padding: 1.8vw;
    }
    &::after {
      content: "";
      position: absolute;
      background-color: transparent;
      pointer-events: none;
      z-index: 100;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      border-top: 36px solid white;
      border-bottom: 36px solid white;
      border-left: 40px solid white;
      border-right: 40px solid white;
      @media (max-width: 2000px){
        border-top: 1.8vw solid white;
        border-bottom: 1.8vw solid white;
        border-left: 2vw solid white;
        border-right: 2vw solid white;
      }
    }
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body {
    font-family: ${lmnts.Fnt.Body};
    min-height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  * {
    box-sizing: border-box
  }

  /* Typography Styles */

  body {
    font-family: ${lmnts.Fnt.Body};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${lmnts.Fnt.Header};
  }
`
export default GlobalStyle
