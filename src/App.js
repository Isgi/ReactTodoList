import React, { Component } from 'react';

import './App.css';
import Item from './Item';

class App extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: 'Sport',
      list: []
    }
    console.log('this constructor');
  }

  componentDidMount() {
    console.log('this component did mount');
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  handlePress = () => {
    const currentList = this.state.list;
    currentList.push(this.state.inputValue);
    this.setState({
      list: currentList,
      inputValue: ''
    })
  }

  handlePressItem = (item) => {
    const currentList = this.state.list;
    const nextList = currentList.filter((itemList) => {
      return itemList != item
    });
    this.setState({
      list: nextList,
    })
  }

  render() {
    console.log('this render');
    return (
      <div className="container">
        <h1 className="title">Application Todo List {this.state.inputValue}</h1>
        <div>
          <input value={this.state.inputValue} onChange={this.handleChange} placeholder="insert todo"/>
          <button onClick={this.handlePress}>Add</button>
        </div>
        {this.state.list.map((item, index) => {
          return (
            <Item key={index} title={item} onClickItem={this.handlePressItem} />
          )
        })}
      </div>
    )
  }
}

export default App;