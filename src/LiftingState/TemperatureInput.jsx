import React, { Component } from 'react'

export class TemperatureInput extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const { title, temperature } = this.props
    return (
      <div>
        <fieldset>
          <legend>{title}</legend>
          <input value={temperature} onChange={this.handleChange} />
        </fieldset>
      </div>
    )
  }
}

export default TemperatureInput
