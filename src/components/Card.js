import React from 'react'
import styled from 'styled-components'
import { HeaderText, Text } from '../components/Headings'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Button from './Button'

const Post = styled.li`
  position: relative;
  overflow: hidden;
  width: 100%;
  transition: background 0.2s;
  box-shadow: 0px 3px 36px rgba( 0, 0, 0, 5%);
  margin: ${props => (props.featured ? '0 0 2% 0' : '1%')};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 31%')};
    ${props => props.theme}
  }
  &:hover {
    box-shadow: 0px 3px 36px rgba( 0, 0, 0, 10%);
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
`

const Image = styled(Img)`
  ${props => {
    /* absolute positioned block */
    if (props.featured )
      return `
        position: absolute !important;
        width: 100%;
        height: 100%;
        div {
          position: absolute;

        }
    `
  }};
`

const TextBlock = styled.div `
  ${props => {
    /* absolute positioned block */
    if (props.featured )
      return `
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient( rgba( 0, 0, 0, .7) 50%, transparent), url(` + props.bgImage + `);
        padding: 150px 150px;
        min-height: 50vh;
        div {
          color: white;
        }
        a {
          height: auto;
          width: auto;
        }
    `
    else
      return `
        position: relative;
    `
  }};
  
`

const Title = styled(HeaderText)`
  color: #293536;
  text-transform: capitalize;
  text-align: center;
  padding: 0 20px;
  margin-bottom: 30px;
`

const Date = styled(Text)`
  text-align: center;
  margin: 30px 0 10px 0;
  color: #A0A0A0;
  padding: 0 20px;
  span {
    font-weight: 400;
  }
`


const Card = ({ slug, heroImage, title, publishDate, author, ...props }) => {
  var date = {publishDate};
  date = date.publishDate.replace("January", "Jan.").replace("February", "Feb.").replace("March", "Mar.").replace("April", "Apr.").replace("August", "Aug.").replace("September", "Sept.").replace("October", "Oct.").replace("November", "Nov.").replace("December", "Dec.");
  var imgSrc = heroImage.fluid.src;
  if ( !props.featured ){
    imgSrc = false;
  }
  console.log( imgSrc );
  return (
    <Post featured={props.featured}>
      <Link to={`/${slug}/`}>
        <Image featured={props.featured} fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
          <TextBlock featured={props.featured} bgImage={imgSrc}>
          <Date size="18" weight="600">{date} <span> • {author}</span></Date>
          {props.featured ? (
            <Title size="100" weight="600">{title}</Title>
          ) : (
              <Title size="42" weight="600">{title}</Title>
          )}
            {props.featured && (
              <Button dark to={'/' + slug}>
                Read Article
              </Button>
            )}
        </TextBlock>
      </Link>
    </Post>
  )
}

export default Card
