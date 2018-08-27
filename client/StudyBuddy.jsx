import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Day from './Day.jsx';
import AddTask from './AddTask.jsx';

export default class StudyBuddy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {text: 'math worksheet', id: 12, size:2},
      monday: [{text: 'write a paper!', id: 1, size: 3}, {text:'do some math!', id: 2, size:1}, {text: 'learn the alphabet', id: 3, size:3}, {text: 'rock out', id: 4, size:1}],
      tuesday: [{text: 'learn the alphabet', id: 3, size:3}, {text: 'rock out', id: 4, size:1}],
      wednesday: [{text: 'prank call my teachers', id: 5, size:1 }, {text:'spell stuff', id: 6, size:1}],
      thursday: [{text: 'pull fire alarm', id: 7, size:1}, {text: 'math test', id: 8, size:3}],
      friday: [{text: 'latin test??!!', id:9, size:3}, {text: 'honestly who learns latin anymore', id:10, size:1}],
      tonight: [{text: 'math worksheet', id: 11, size:2}, {text: 'write a paper!', id: 1, size: 3}, {text:'do some math!', id: 2, size:1}, {text: 'learn the alphabet', id: 3, size:3}],
      done: [],
      stars: 3,
      tasksAdded: 12,
      tasksCompleted: 0,
      tasksQuit: 0,
    }
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleSingleClick = this.handleSingleClick.bind(this);
    this.handleTaskAdd = this.handleTaskAdd.bind(this);
  }

  handleDoubleClick(e) {
    console.log('inside double');
    //console.log('event', e.target.id.parseInt());
    // if the item is current and the timer is off:
    //. move it to state -> done
    // if the item is not current, move it to current
    // stop all timers

    // FIRST PASS: just remove it from tonight
    // and add it to done.

    e.preventDefault();
    const targetId = parseInt(e.target.id, 10);
    let currentTasks = this.state.tonight;
    // iterate through the list of tasks and remove the match
    for (let idx = 0; idx < currentTasks.length; idx += 1) {
      if ((currentTasks[idx].id === targetId) && (idx === 0)) {
        currentTasks.splice(idx, 1);
      } else if (currentTasks[idx].id === targetId) {
        console.log('inside else');
        let temp = currentTasks.splice(idx, 1);
        currentTasks.unshift(temp[0]);
      }
    }
    this.setState({ tonight : currentTasks })
  }

  handleSingleClick(e) {
    // if the item is current, flip the timer state
    console.log('inside single');
  }

  handleTaskAdd(text, size) {
    let tonight = this.state.tonight;
    let id = this.state.tasksAdded + 1;
    tonight.push({id: id, text: text, size: parseInt(size, 10) })
    this.setState({tonight: tonight, tasksAdded: id });
  }

  render() {
    const {
      monday, tuesday, wednesday, thursday, friday, tonight, done, current,
    } = this.state;

    // Get the height of the Day column using tonight's tasks
    let dayHeight = 0;
    tonight.forEach((item) => {
      console.log('item inside height calc: ', item, item.size);
      dayHeight += item.size * 60 + 5;
    });
    const colStyle = {
      width: 300,
      background: 'grey',
      border: 2,
      margin: 10,
      height: dayHeight + 200,
      paddingBottom: 5,
      borderRadius: 5,
      marginBottom: 50,
      display: 'flex-col',

    }

    return (
      <section className="main">
      <div style={colStyle}>
      <Day tasks={tonight}
        colHeight={dayHeight}
        handleDoubleClick={this.handleDoubleClick}
        handleSingleClick={this.handleSingleClick}
        current={tonight[0]}
      />
      <AddTask handleTaskAdd={this.handleTaskAdd} />
      </div>
      </section>
      );
  }
}