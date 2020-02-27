import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  state = {
    gifs: []
  }

  fetchData(query) {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=cQvYiyw4tnRCS05EJXPmltsAb0cBHUnk&rating=g`)
      .then(response => response.json())
      .then(({ data }) => this.setState({
        gifs: data.slice(0, 3)
      }))
  }

  handleSubmit = (event, query) => {
    event.preventDefault()
    this.fetchData(query)
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default GifListContainer