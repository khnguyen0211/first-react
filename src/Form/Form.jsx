import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      textareaValue: '',
      selectValue: '',
      checkboxValue: false
    }
  }

  handleChange = (event) => {
    const { name } = event.target
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    this.setState({
      [name]: value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor=''>
            Name:
            <input type='text' name='inputValue' value={this.state.inputValue} onChange={this.handleChange} />
          </label>
          <br></br>
          <label htmlFor=''>
            School:
            <textarea name='textareaValue' value={this.state.textareaValue} onChange={this.handleChange} />
          </label>

          <select name='selectValue' value={this.state.selectValue} onChange={this.handleChange}>
            <option value='Potential'>Potential</option>
            <option value='Extends'>Extends</option>
            <option value='Furniture'>Furniture</option>
          </select>

          <input type='checkbox' name='checkboxValue' value={this.state.checkboxValue} onChange={this.handleChange} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}
