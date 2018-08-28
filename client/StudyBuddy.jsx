import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Day from './Day.jsx';
import AddTask from './AddTask.jsx';
import axios from 'axios';

export default class StudyBuddy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // monday: [{text: 'write a paper!', id: 1, size: 3}, {text:'do some math!', id: 2, size:1}, {text: 'learn the alphabet', id: 3, size:3}, {text: 'rock out', id: 4, size:1}],
      // tuesday: [{text: 'learn the alphabet', id: 3, size:3}, {text: 'rock out', id: 4, size:1}],
      // wednesday: [{text: 'prank call my teachers', id: 5, size:1 }, {text:'spell stuff', id: 6, size:1}],
      // thursday: [{text: 'pull fire alarm', id: 7, size:1}, {text: 'math test', id: 8, size:3}],
      // friday: [{text: 'latin test??!!', id:9, size:3}, {text: 'honestly who learns latin anymore', id:10, size:1}],
      //tonight: [{text: 'math worksheet', id: 11, size:2}, {text: 'write a paper!', id: 1, size: 3}, {text:'do some math!', id: 2, size:1}, {text: 'learn the alphabet', id: 3, size:3}],
      tonight: [],
      done: [],
      stars: 3,
      tasksAdded: 12,
      tasksCompleted: 0,
      tasksQuit: 0,
      timer: false,
    }
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleSingleClick = this.handleSingleClick.bind(this);
    this.handleTaskAdd = this.handleTaskAdd.bind(this);
  }

  handleDoubleClick(e) {
    //console.log('event', e.target.id.parseInt());
    // if the item is current and the timer is off:
    //. move it to state -> done
    // if the item is not current, move it to current
    // stop all timers

    // FIRST PASS: just remove it from tonight
    // and add it to done.

    e.preventDefault();
    const targetId = parseInt(e.target.id, 10);
    console.log('targetId', targetId)
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
    console.log(e.target);
    let id = parseInt(e.target.id, 10);
    console.log('inside single', id, 'tonight[0]', this.state.tonight[0].id);
    let currentId = this.state.tonight[0].id;
    if (id === currentId) {
      let currentTimer = this.state.timer;
      currentTimer = !currentTimer;
      this.setState({timer: currentTimer }, ()=> {console.log(this.state.timer)});
    }
  }

  handleTaskAdd(text, difficulty) {
    let tonight = this.state.tonight;
    let id = this.state.tasksAdded + 1;
    tonight.push({id: id, text: text, difficulty: parseInt(difficulty, 10) })
    this.setState({tonight: tonight, tasksAdded: id });
    axios.post('/tasks', {
      task: text,
      difficulty: difficulty,
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  componentDidMount() {
    axios.get('/tasks')
    .then((response) => {
      this.setState({ tonight: response.data })
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  render() {
    const {
      monday, tuesday, wednesday, thursday, friday, tonight, done, timer,
    } = this.state;

    // Get the height of the Day column using tonight's tasks
    let dayHeight = 0;
    tonight.forEach((item) => {
      dayHeight += item.difficulty * 60 + 5;
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
        timer = {timer}
      />
      <AddTask handleTaskAdd={this.handleTaskAdd} />
      </div>
      </section>
      );
  }
}