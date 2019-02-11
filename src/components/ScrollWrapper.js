import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'

export const ScrollArea = styled.main`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 36px;
`

class Wrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isTop: true,
    }
  }

  handleScroll = e => {
    const top = e.target.scrollTop > 5
    if (top) {
      this.setState({
        isTop: false,
      })
    } else {
      this.setState({
        isTop: true,
      })
    }

    console.log(this.state.isTop)
  }

  render() {
    const { children } = this.props

    return (
      <ScrollArea onScroll={this.handleScroll}>
        <Menu id="navBar" isTop={ this.state.isTop } />
        {children}
      </ScrollArea>
    )
  }
}

export default Wrapper
