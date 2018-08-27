import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SmallTask = styled.div`
  color: blue;
  background-color: white;
  height: 60px;
  border-radius: 15px;
  margin: 5px;
  padding: 5px;
`;
const MediumTask = styled.div`
  color: blue;
  background-color: white;
  height: 120px;
  border-radius: 15px;
  margin: 5px;
  padding: 5px;
`;
const LargeTask = styled.div`
  color: blue;
  background-color: white;
  height: 180px;
  border-radius: 15px;
  margin: 5px;
  padding: 5px;
`;

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
    }
  }

  render() {
    const { text, size, handleSingleClick, handleDoubleClick, id } = this.props;
    let ToRender;
    if (size === 1) {
      ToRender = <SmallTask
        className="Task"
        onDoubleClick={handleDoubleClick}
        onClick={handleSingleClick}
        id={id}
        > {text} </SmallTask>
    } else if (size === 2) {
      ToRender = <MediumTask
        className="Task"
        onDoubleClick={handleDoubleClick}
        onClick={handleSingleClick}
        id={id}
      > {text} </MediumTask>
    } else {
      ToRender = <LargeTask
        className="Task"
        onDoubleClick={handleDoubleClick}
        onClick={handleSingleClick}
        id={id}
      > {text} </LargeTask>
    }

    return (
      <div>

        {ToRender}

      </div>
    );
  }
}