import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const TextBox = styled.textarea`
  height: 100px;
  resize: none;
  font-size: 1em;
  margin: 5px;
  width: 182px;
`;

const NewTaskText = styled.input`
  height: 50px;
  margin: 5px;
  padding: 3px;
`;

export default class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      size: 1,
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(e) {
    e.preventDefault();
    const text = e.target.value;
    this.setState({ text: text });
  }
  handleSelect(e) {
    e.preventDefault();
    this.setState({ size: e.target.value });
    console.log(e.target.value);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { handleTaskAdd } = this.props;
    if (this.state.text !== '') {
      handleTaskAdd(this.state.text, this.state.size);
      e.target.reset();
    }
    this.setState({ text: '', size: 1 });
    //this.setState({ text: ''}, ()=> { console.log(this.state);});
  }

  render() {
    const inputStyle = {
      width: 180,
      height: 100,
      margin: 5,
    }
    const buttonStyle = {
      width: 100,
      height: 80,
      margin: 10,
      padding: 25,
    }
    const selectStyle = {
      width: 50,
      height: 35,
      marginLeft: 5,
    }
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          value={this.state.value}
          onChange={this.handleTextChange}
        />
        <select onChange={this.handleSelect} style={selectStyle}>
          <option value={1}>SM</option>
          <option value={2}>MD</option>
          <option value={3}>LG</option>
        </select>
        <input
          type="submit"
          value="  New  "
          className="submitButton"
          
        />

      </form>
    );
  }
}