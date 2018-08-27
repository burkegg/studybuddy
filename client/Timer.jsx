import React from 'react';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      timeRemaining: null,
    }
  }

  setTimer(){
    // take in the size of the task from props
    const size = this.props.size;
    const seconds = size * 15 * 60;
    this.setState({ timeRemaining: seconds }, () => console.log('timer', this.state))
  }

  startTimer(){
    setInterval(()=>{
      let seconds = this.state.timeRemaining;
      seconds -= 1;
      this.setState({ timeRemaining: seconds }, ()=>{console.log(this.state)})
    }, 1000);
  }

  componentDidMount() {
    this.setTimer();
    console.log('this.props.id', this.props.id, 'current.id', this.props.current.id);
    if (this.props.id === this.props.current.id) {
      this.startTimer(); 
    }
  }
  handleTimerButton(e) {
    e.preventDefault();
    let running = this.state.running;
    running = !running;
    this.setState({ running: running });
  }

  render() {
    const timeStyle = {
      fontSize: '0.8em',
      marginBottom:10,
      bottom: 0,
      position: 'relative',
    }
    let timeRemaining = this.state.timeRemaining;
    return (
      <div style={timeStyle}>
      Time left: {timeRemaining}

      </div>
    )
  }
}
