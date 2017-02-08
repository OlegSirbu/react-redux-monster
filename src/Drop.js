import React, { Component } from 'react';

class Drop extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpened: false
        }
    }

    toggleState(){
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

  render() {
    return (
      <div onClick={this.toggleState.bind(this)}>
            its Drop:
      </div>
    );
  }
}

export default Drop;
