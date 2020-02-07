"use strict";

import React, { Component } from "react";
import Button from './button';
import Square from './square';
import Timer from './timer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      showTimer: true
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    console.log('render');
    return (
      <div>
        {this.state.showTimer && <Timer />}

        <Button onClick={() => {
          this.setState({ showTimer: !this.state.showTimer })
        }}> Show / hide Timer</Button>
      </div>
    )
  }
}

export default App;
