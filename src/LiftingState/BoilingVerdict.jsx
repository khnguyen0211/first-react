import React, { Component } from 'react'

export class BoilingVerdict extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>{this.props.celsius >= 100 ? 'Boiled' : 'Did not boil'}</div>
  }
}

export default BoilingVerdict
