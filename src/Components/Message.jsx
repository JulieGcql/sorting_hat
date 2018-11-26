import React, { Component } from 'react'
import { connect } from 'react-redux';


export class Message extends Component {

  render() {
    return (
      <div>
        <b>{this.props.houses[this.props.indexSelected]}</b>
      </div>
    )
  }
}

export default connect(store => store)(Message)
