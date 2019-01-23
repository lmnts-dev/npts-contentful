import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
export default class App extends Component {
  render () {
      return <ReactPlayer url='https://www.dropbox.com/s/c2dswh5v23q7g24/NPTC_proof2.mp4?dl=0' loop height="54vw" width="96vw" controls/>
  }
}