import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'

export const ScrollArea = styled.main`
  height: 100vh;
  max-width: 2000px;
  margin: 0 auto;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;
  padding: 36px;
  @media (max-width: 600px) {
    padding: 15px;
  }
`

class ScrollWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pagetop: true
    }
  }

  handleScroll = e => {
    const top = e.target.scrollTop > 36
    if (top) {
      this.setState({
        pagetop: false,
      })
    } else {
      this.setState({
        pagetop: true,
      })
    }
  }

  render() {
    const { children } = this.props
    const anger = this.props.homePage
    return (
      <ScrollArea onScroll={this.handleScroll}>
        <Menu id="navBar" pagetop={this.state.pagetop} darknav={this.props.darknav} homePage={anger}/>
        {children}
      </ScrollArea>
    )
  }
}

export default ScrollWrapper
