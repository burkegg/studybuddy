import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: null,
      remaining: 300,
    };
  }

  componentDidMount() {

    let duration = this.props.duration;
    this.setState({ duration: duration });
    
    this.setState({ remaining : duration });
    this.timerID = setInterval(
      () => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let remaining = this.state.remaining;
    if ((this.props.timer) && (this.props.id === this.props.current.id)) {
      remaining -= 1;
      this.setState({
        remaining: remaining
      });
    }
  }

  render() {
    let remaining = this.state.remaining;
    let displayMin = Math.floor(remaining / 60);
    let displaySec = remaining - displayMin * 60;
    console.log(displayMin, displaySec);
    return (
      <div>
        {`${displayMin} M ${displaySec} Sec`}
      </div>
    )
  }



}