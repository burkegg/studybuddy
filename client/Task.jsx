import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Timer from './Timer.jsx';
import Timer from './Timer2.jsx';

import {
  SmallStopButton,
  SmallStartButton,
  SmallTask,
  MediumTask,
  LargeTask,
  SmallMoveButton,
  LgStartButton,
  LgStopButton,
  LgShiftButton,
  LargeDeleteButton,
  LargeText,
  LargeTime,
  SmallDeleteButton,
  SmallText,
  SmallTime,
  MediumDeleteButton,
  MediumText,
  MediumTime,
  MediumShiftButton,
  MediumStartButton,
  MediumStopButton,
} from './Styled.jsx';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillUnmount(){
    this.setState({ timer: false });
  }

  render() {
    const { text, size, handleDoubleClick, id, current, handleSingleClick} = this.props;
    const { timer, handleDelete } = this.props;
    let ToRender;
    let test = 2;
    let buttonType;
    const timeStyle = {
      bottom: 0,
    }
    // Small button cases:
    if (size === 1) {
      // handle current task that isn't running
      if ((!timer) && (id === current.id)){
        buttonType = <SmallStartButton onClick={handleSingleClick} id={id}/>
      } 
      // handle current task that is running
      else if (id === current.id){
        buttonType = <SmallStopButton onClick={handleSingleClick} id={id}/>
      }
      // handle not current task
      else {
        buttonType = <SmallMoveButton onClick={handleDoubleClick} id={id}/>
      }
    }

    if (size === 2) {
      if ((!timer) && (id === current.id)) {
        buttonType = <MediumStartButton onClick={handleSingleClick} id={id}/>
      } else if (id === current.id) {
        buttonType = <MediumStopButton onClick={handleSingleClick} id={id}/>
      } else {
        buttonType = <MediumShiftButton onClick={handleDoubleClick} id={id}/>
      }
    }

    if (size === 3) {
      if ((!timer) && (id === current.id)) {
        buttonType = <LgStartButton onClick={handleSingleClick} id={id}/>
      } else if (id === current.id) {
        buttonType = <LgStopButton onClick={handleSingleClick} id={id}/>
      } else {
        buttonType = <LgShiftButton onClick={handleDoubleClick} id={id}/>
      }
    }

    if (size === 1) {
      ToRender = <SmallTask
          className="Task"
          id={id}
        >
        <SmallDeleteButton onClick={handleDelete} id={id}/>
        <SmallText >
          {text}
        </SmallText>
        <div>
          <SmallTime>
            <Timer size={size} id={id} current={current} timer={timer} duration={900}/>
          </SmallTime>
          <div>
            {buttonType}
          </div>
        </div>
      </SmallTask>
    } 



    else if (size === 2){
      ToRender = <MediumTask
          className="Task"
          id={id}
        >
        <MediumDeleteButton onClick={handleDelete} id={id}/>
        <MediumText >
          {text}
        </MediumText>
        <div>
          <MediumTime>
            <Timer size={size} id={id} current={current} timer={timer} duration={1800}/>
          </MediumTime>
          <div>
            {buttonType}
          </div>
        </div>
      </MediumTask>
    } 
    else {
      ToRender = <LargeTask
          className="Task"
          id={id}
        >
        <LargeDeleteButton onClick={handleDelete} id={id}/>
        <LargeText>
          {text}
        </LargeText>
        <div>
          <LargeTime>
            <Timer size={size} id={id} current={current} timer={timer} duration={3600}/>
          </LargeTime>
          <div>
            {buttonType}
          </div>
        </div>
      </LargeTask>
    }

    return (
      <div>

        {ToRender}
      </div>
    );
  }
}