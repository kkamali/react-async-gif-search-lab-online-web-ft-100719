import React, { Component } from 'react'

class GifList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.gifs.map(gif => <li key={gif.url}><img src={gif.url} alt="gif" /></li>)}
        </ul>
      </div>
    )
  }
}

export default GifList