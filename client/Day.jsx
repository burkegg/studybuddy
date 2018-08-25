import React from 'react';
import ReactDOM from 'react-dom';

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
          <div>{task.text}</div>)}
      </div>
      );
  }
}
