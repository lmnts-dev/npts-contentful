import { createGlobalStyle } from 'styled-components'
import * as lmnts from '../data/Styles'

const GlobalStyle = createGlobalStyle`
  .tl-wrapper {
    position: relative !important;
  }
  .modal-open {
    main {
      overflow-y: hidden;
    }
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
    position: relative;
    .tl-wrapper-outer {
      overflow-y: visible;
      overflow-x: visible !important;
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
    overflow: hidden;
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
