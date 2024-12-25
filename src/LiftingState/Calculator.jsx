import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict'

const temperatureConvert = (temperature, scale) => {
  const value = Number(temperature)
  if (Number.isNaN(value)) {
    return ''
  }
  const output = scale === 'f' ? (value - 32) / 1.8 : value * 1.8 + 32
  return Math.round(output, 2)
}
export class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      temperature: '',
      scale: ''
    }
  }
  handleChange = (scale) => (value) => {
    this.setState({ temperature: value, scale })
  }
  render() {
    const { temperature, scale } = this.state
    const celsius = scale === 'f' ? temperatureConvert(temperature, scale) : temperature
    const fahrenheit = scale === 'c' ? temperatureConvert(temperature, scale) : temperature
    return (
      <div>
        <b>Temperature</b>
        <TemperatureInput
          title={'Celsius value:'}
          temperature={celsius}
          onTemperatureChange={this.handleChange('c')}
        ></TemperatureInput>
        <TemperatureInput
          title={'Fahrenheit value:'}
          temperature={fahrenheit}
          onTemperatureChange={this.handleChange('f')}
        ></TemperatureInput>
        <BoilingVerdict celsius={celsius}></BoilingVerdict>
      </div>
    )
  }
}

export default Calculator
