import React, { Component, createRef } from 'react'

export default class Uncontrolled extends Component {
  constructor(props) {
    super(props)
    this.fileInput = createRef()
    this.state = {
      selectedFile: null
    }
  }

  handleFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.selectedFile)
    const formData = new FormData()
    formData.append('file', this.state.selectedFile, this.state.selectedFile.name)

    console.log(formData)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='file' ref={this.fileInput} onChange={this.handleFileChange} />
          </label>
          <input type='submit' />
        </form>
      </div>
    )
  }
}
