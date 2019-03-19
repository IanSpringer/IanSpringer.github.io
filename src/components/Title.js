
import React, { Component } from 'react';
import Letter from './Letter'

class Title extends Component {
  constructor(props) {
    super(props);
    this.buildName = this.buildName.bind(this);
    this.state = {
      name: "Ian Springer"
    }
  }

  buildName() {
    return this.state.name.split('').map((letter, key) => <Letter letter={letter} index={key}/>)
  }

  render() {
    return (
      <h1 className="banner__title">
        {this.buildName()}
      </h1>
    )
  }
}

export default Title;
