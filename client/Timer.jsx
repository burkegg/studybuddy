import React from 'react';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: null,
    }

  }

  setTimer(){
    // take in the size of the task from props
    const size = this.props.size;
    const seconds = size * 15 * 60;
    this.setState({ timeRemaining: seconds })
  }

  startTimer(){
    console.log('inside startTimer');
    this.interval = setInterval(()=>{
      if ((this.state.timeRemaining > 0) && (this.props.timer)) {
      let seconds = this.state.timeRemaining;
      seconds -= 1;
      this.setState({ timeRemaining: seconds }, ()=>{console.log(this.state)}) 
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  componentDidMount() {
    this.setTimer();
    console.log('timer prop inside timer = ', this.props.timer);
    let runningState = this.props.timer;
    if (this.props.timer) {
      this.setState({running: runningState }, ()=> {console.log('state check', this.state.running)});
      this.startTimer();
    }
  }

  componentWillUnmount() {
    this.setState({ running: false });
    clearInterval(this.interval);
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
