// SocialStrip Component:
// The SocialStrip component, typically used in Hero components.

// Core
import React from 'react';
import styled from 'styled-components';

// Components
import fb from '../images/facebook.png'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'




export const SocialStripStyle = styled.div`
  text-decoration: none;
  color: black;
  position: absolute;
  left: -60px;
  top: calc( 20vh + 15px );
  @media( max-width: 800px){
    left: -5%;
    top: 50px;
  }
  @media (max-width: 600px){
    left: -6%
  }
  @media (max-width: 450px){
    display: flex;
    flex-direction: row;
    top: 25px;
    left: 0;
    a {
      margin-left: 2px;
    }
  }

  a {
      display: block;
    color: black;
    text-decoration: none;
    position: relative;
    span {
      width: 100%;
      height: auto;
    }
    img {
        height: 45px;
        width: 45px;
        position: relative;
        &:hover {
           opacity: .8;      
        }
        @media( max-width: 800px){
          height: 30px;
          width: 30px;
      }
    }
  }
`;

SocialStripStyle.Label = styled.span`
  color: black;
  display: inline-flex;
  width: auto;
  align-items: center;
`;

const SocialStrip = ({ TextColor, Location, Margin }) => (
  <SocialStripStyle Margin={Margin} TextColor={TextColor}>
    <a
      href={'https://www.facebook.com/sharer.php?u=' + Location}
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      <img src={fb} />
    </a>
    <a
      href={
        'https://twitter.com/intent/tweet?url=' +
        Location +
        '&text=Test&via=Test&hashtags=Test'
      }
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      <img src={twitter} />
    </a>
    <a
      href={
        'https://www.linkedin.com/shareArticle?mini=true&url=' +
        Location +
        '&title=Test&summary=Test&source=Test'
      }
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
            <img src={linkedin} />
    </a>
  </SocialStripStyle>
);

export default SocialStrip;
