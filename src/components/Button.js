import React from 'react'
import styled from 'styled-components'
import arrowGrey from "../images/arrowGrey.png"
import arrowWhite from "../images/arrowWhite.png"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import * as lmnts from '../data/Styles'

/* these are the four buttons you can call ////////////////

    STILL NEED TO FIGURE OUT CONTENT URL FOR BUTTON WITH ARROW 
    
    <Button to="/"> light pillow </Button>
    <Button to="/" dark> dark pillow </Button>
    <Button to="/" arrowButton> light arrow </Button>
    <Button to="/" arrowButton dark> dark arrow </Button>
    
///////////////////////////////////////////////////////// */

export const ButtonStyle = styled(AniLink)`
  display: ${props => props.hide ? 'none' : 'inline-block'};
  letter-spacing: 1px;
  font-size: 19px;
  z-index: 200;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  @media ( max-width: 1440px ){
    font-size: 1.25vw;
  }
  @media ( max-width: 1120px ){
    font-size: 14px;
  }
  font-family: 'Montserrat', sans-serif;
  line-height: 1;
  font-weight: 700;
  ${props => {
    /* grey background circle button */
    if (!props.arrowButton && props.dark) return ` 
      padding: 23px 46px;
      @media ( max-width: 1440px ){
        padding: 1.6vw 3.19vw;
      }
      @media ( max-width: 1120px ){
        padding: 19.2px 38.28px;
      }
      background-color: #F7F7F7;
      color: #9f4300;
      border-radius: 46px;
    `
    /* white background circle button */
    if (!props.arrowButton && !props.dark) return `
      padding: 23px 46px;
      @media ( max-width: 1440px ){
        padding: 1.6vw 3.19vw;
      }
      @media ( max-width: 1120px ){
        padding: 19.2px 38.28px;
      }
      color: #9f4300;
      border-radius: 46px;
      background-color: #FFFFFF;
      box-shadow: 0 3px 36px rgba( 0, 0, 0, .16);
    `
    /* white arrow button */
    if (props.arrowButton && !props.dark) return `
      color: #FFFFFF;
    `
    /* dark arrow button */
    if (props.arrowButton && props.dark) return `
      color: #9F4300;
    `
  }}
`

const Arrow = styled.img`
  width: 28.8px;
  transform: translate( 30%, 30%);
  @media (max-width: 1440px){
    width: 2vw;
  }
  @media ( max-width: 1120px ){
    width: 22.4px;
  }
`

export const Button = ({ to, hide, arrowButton, dark, children }) => {
  if (!arrowButton){
      return (
        <ButtonStyle to={to} hide={hide} arrowButton={arrowButton} dark={dark} cover bg={lmnts.Anim.Page.Color} duration={lmnts.Anim.Page.Duration} direction={lmnts.Anim.Page.Direction}>
          {children}
        </ButtonStyle>
      )
    }
    else {
    if (dark) {
      return (
        <ButtonStyle to={to} hide={hide} arrowButton={arrowButton} dark={dark} cover bg={lmnts.Anim.Page.Color} duration={lmnts.Anim.Page.Duration} direction={lmnts.Anim.Page.Direction}>
          {children}
          <Arrow src={arrowGrey} alt="Arrow" />
        </ButtonStyle>
      )
    }
    else {
      return (
        <ButtonStyle to={to} hide={hide} arrowButton={arrowButton} dark={dark} cover bg={lmnts.Anim.Page.Color} duration={lmnts.Anim.Page.Duration} direction={lmnts.Anim.Page.Direction}>
          {children}
          <Arrow src={arrowWhite} alt="Arrow" />
        </ButtonStyle>
      )
    } 
  }
}
export default Button