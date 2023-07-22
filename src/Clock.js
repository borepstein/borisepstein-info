import React from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    var d = new Date();

    this.state = {
      time: d.toUTCString()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    var d = new Date();

    this.setState({
      time: d.toUTCString()
    });
  }

  render() {
    return (
        this.state.time
    );
  }
}

export default Clock;
