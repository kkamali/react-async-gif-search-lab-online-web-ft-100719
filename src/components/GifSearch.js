import React, { Component } from 'react'

class GifSearch extends Component {
  state = {
    query: ""
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={event => this.props.handleSubmit(event, this.state.query)}>
        <input type="text" onChange={event => this.handleChange(event)} value={this.state.query} />
        <input type="submit" />
      </form >
    )
  }
}

export default GifSearch