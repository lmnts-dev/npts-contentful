import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 100px;
  @media (max-width: 800px ){
    flex-direction: column;
  }
`

const CardList = props => {
  return <List>{props.children}</List>
}

export default CardList
