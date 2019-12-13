import React, { Component } from 'react'

class Item extends Component {
  render() {
    return <h1 onClick={() => this.props.onClickItem(this.props.title)}>Item {this.props.title}</h1>
  }
}

export default Item;