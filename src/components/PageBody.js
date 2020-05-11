import React from 'react'
import styled from 'styled-components'
require('prismjs/themes/prism.css')

const Body = styled.div`
  margin: 0 auto;
  overflow-x: hidden;
  color: #293536;

  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
    text-transform: capitalize;
  }

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1em;
  }

  p {
    font-size: 22px;
    margin-bottom: 20px;
    @media (max-width: 1440px) {
      font-size: 1.53vw;
    }
    @media (max-width: 1047px) {
      font-size: 16px;
    }
    line-height: 1.8;
  }

  a {
    transition: 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 2em 0;
    li {
      font-size: 22px;
      @media (max-width: 1440px) {
        font-size: 1.53vw;
      }
      @media (max-width: 1047px) {
        font-size: 16px;
      }
        line-height: 1.8;
      }
    }
  }

  ul {
    li {
      list-style: none;
      line-height: 2;
      margin-right: 30px;
      &:last-child {
        margin: 0;
      }
      &:before {
        content: "•";  
        color: #9F4300;
        font-weight: bold; 
        display: inline-block;  
        margin: 0 5px 0 30px; 
      }
    }
  }

  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 2;
      margin-left: 30px;
      margin-right: 30px;
      &:last-child {
        margin: 0;
        margin-left: 30px;
        margin-right: 30px;
      }
    }
  }

  hr {
    border-style: solid;
    border-color: ${props => props.theme.colors.secondary};
    margin: 0 0 2em 0;
  }

  blockquote {
    margin: 0 30px;
    padding: 0 0 0 0.5em;
    font-size: 34px;
    @media ( max-width: 1440px ){
      font-size: 2.36vw;
    }
    @media ( max-width: 600px ){
      font-size: 14.16px;
    }
    p {
      @media ( max-width: 1440px ){
        font-size: 2.36vw;
      }
      @media ( max-width: 600px ){
        font-size: 14.16px;
      }      
    }
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: 2px;
    background: ${props => props.theme.colors.secondary} !important;
    span {
      background: inherit !important;
    }
  }
`

const PageBody = props => {
  return (
    <Body
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default PageBody
