import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Task from './Task.jsx';

export default class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anything: 5,
    }
  }

  render() {
    const { tasks, handleSingleClick, handleDoubleClick, current, timer, handleDelete } = this.props;
    return (
      <div>
        {tasks.map((task) =>
          <Task
            current={current}
            id={task.id}
            key={task.id}
            text={task.text}
            size={task.difficulty}
            handleDelete={handleDelete}
            handleSingleClick={handleSingleClick}
            handleDoubleClick={handleDoubleClick}
            timer = {timer}
          />
        )}
      </div>
    );
  }
}
