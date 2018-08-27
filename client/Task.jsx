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
`;
const MediumTask = styled.div`
  background-color: white;
  height: 120px;
  border-radius: 15px;
  margin: 5px;
  padding: 5px;
`;
const LargeTask = styled.div`
  background-color: white;
  height: 180px;
  border-radius: 15px;
  margin: 5px;
  padding: 5px;
  position: relative;
`;


export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
    }
  }

  render() {
    const { text, size, handleSingleClick, handleDoubleClick, id, current, } = this.props;
    let ToRender;

    const timeStyle = {
      bottom: 0,
    }


    if (size === 1) {
      ToRender = <SmallTask
        className="Task"
        onDoubleClick={handleDoubleClick}
        onClick={handleSingleClick}
        id={id}
      > 
        {text} 
        <div>
          <Timer size={size} id={id} current={current} />
        </div>
      </SmallTask>
    } else if (size === 2) {
      ToRender = <MediumTask
        className="Task"
        onDoubleClick={handleDoubleClick}
        onClick={handleSingleClick}
        id={id}
        >
        {text} 
          <Timer style={timeStyle} size={size} id={id} current={current}/>
      </MediumTask>
    } else {
      ToRender = <LargeTask
        className="Task"
        onDoubleClick={handleDoubleClick}
        onClick={handleSingleClick}
        id={id}
      > {text} <Timer size={size} id={id} current={current} /></LargeTask>
    }

    return (
      <div>

        {ToRender}

      </div>
    );
  }
}