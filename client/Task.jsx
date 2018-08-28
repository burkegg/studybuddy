import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Timer from './Timer.jsx';

const SmallTask = styled.div`
  background-color: white;
  height: 60px;
  border-radius: 15px;
  margin: 5px;
  padding: 5px;
  font-size: 0.6em;
  display: flex-col;
  text-align: center;

`;
const MediumTask = styled.div`
  background-color: white;
  height: 120px;
  border-radius: 15px;
  margin: 5px;
  padding-left: 5px;
  padding-top: 5px;
  padding-right: 0px;
  display: flex-col;
  text-align: center;
`;
const LargeTask = styled.div`
  background-color: white;
  height: 180px;
  border-radius: 15px;
  margin: 5px;
  padding: 5px;
  display: flex-col;
  text-align: center;
`;


export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: false,
    }
    this.handleSingleClick = this.handleSingleClick.bind(this);
  }

  handleSingleClick(e) {
    // if the item is current, flip the timer state
    console.log(e.target);
    let id = parseInt(e.target.id, 10);
    let current = this.props.current.id;
    if (id === current) {
      let tempState = this.state.timer;
      tempState = !tempState;
      this.setState({ timer: tempState }, ()=> {
        console.log(this.state);
        this.forceUpdate();
      });
    }
  }

  componentWillUnmount(){
    this.setState({ timerOn: false });
  }

  render() {
    const { text, size, handleDoubleClick, id, current} = this.props;
    const { timer } = this.state;
    console.log('in render ' , timer);
    let ToRender;

    const timeStyle = {
      bottom: 0,
    }

    if (size === 1) {
      ToRender = <SmallTask
          className="Task"
          onDoubleClick={handleDoubleClick}
          onClick={this.handleSingleClick}
          id={id}
        > 
        {text} 
        <div>
          <Timer size={size} id={id} current={current} timer={timer}/>
        </div>
      </SmallTask>
    } 

    else if (size === 2){

      ToRender = <MediumTask
          className="Task"
          onDoubleClick={handleDoubleClick}
          onClick={this.handleSingleClick}
          id={id}
        >
        {text} 
        <Timer style={timeStyle} size={size} id={id} current={current} timer={timer}/>
      </MediumTask>
    } 

    else {
      ToRender = <LargeTask
          className="Task"
          onDoubleClick={handleDoubleClick}
          onClick={this.handleSingleClick}
          id={id}
        > {text} 
        <Timer size={size} id={id} current={current} timer={timer}/>
      </LargeTask>
    }

    return (
      <div>

        {ToRender}
      </div>
    );
  }
}