import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Day from './Day.jsx';

const Column = styled.div`
  width: 200px;
  background: grey;
  height: 400px;
  border: 2px;
  margin: 10px;
  `;

export default class StudyBuddy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monday: [{text: 'write a paper!', id: 1}, {text:'do some math!', id: 2}],
      tuesday: [{text: 'learn the alphabet', id: 3}, {text: 'rock out', id: 4}],
      wednesday: [{text: 'prank call my teachers', id: 5}, {text:'spell stuff', id: 6}],
      thursday: [{text: 'pull fire alarm', id: 7}, {text: 'math test', id: 8}],
      friday: [{text: 'latin test??!!', id:9}, {text: 'honestly who learns latin anymore', id:10}],
      tonight: [{text: 'math worksheet', id: 11}],
      done: [{text: 'buy gym uniform', id: 12}],
    }
  }

  render() {
    const {
      monday, tuesday, wednesday, thursday, friday, tonight, done,
    } = this.state;
    return (
      <section className="main">
      <Column>
      <Day tasks={tonight}/>
      </Column>
      <Column>
      <Day tasks={monday}/>
      </Column>
      <Column>
      <Day tasks={tuesday}/>
      </Column>
      <Column>
      <Day tasks={wednesday}/>
      </Column>
      <Column>
      <Day tasks={thursday}/>
      </Column>
      <Column>
      <Day tasks={friday}/>
      </Column>

      </section>
      );
  }
}