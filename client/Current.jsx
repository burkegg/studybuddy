import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

export default class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anything: 5,
    }
  }

  render() {
    console.log(this.props);
    const { tasks } = this.props;
    console.log('tasks', tasks);
    
    return (
      <div>
        {tasks.map((task) =>
          <div key={task.id}>{task.text}</div>)}
      </div>
    );
  }
}
