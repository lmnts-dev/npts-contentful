import React from 'react'
import styled from 'styled-components'
import { HeaderText, Text } from '../components/Headings'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Post = styled.li`
  position: relative;
  width: 100%;
  height: 50vh;
  min-height: 700px;
  transition: background 0.2s;
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
    }
  }
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
  return (
    <Post featured={props.featured}>
      <Link to={`/${slug}/`}>
        <Img fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
        <Date size="18" weight="600">{date} <span> • {author}</span></Date>
        <Title size="42" weight="600">{title}</Title>
      </Link>
    </Post>
  )
}

export default Card
