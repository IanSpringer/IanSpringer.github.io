import React, { Component } from 'react';

class Letter extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <span class="banner__letter" data-index={this.props.index}>{this.props.letter}</span>
    )
  }
}

export default Letter;
