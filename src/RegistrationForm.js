import React, { Component } from 'react';

class RegistrationForm extends Component {
   constructor(props){
     super(props);
     this.state = {
       email:''
     }
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleEmailChange = this.handleEmailChange.bind(this);
   }

handleEmailChange(event){
  console.log('handleEmailChange', event.target.value)
  this.setState({
    email:event.target.value
  })
}

handleSubmit(e){
console.log('handleSubmit', this.inputEmail)
e.preventDefault();

}

  render() {
      
    return (
      <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            value={this.state.email}
            onChange={this.handleEmailChange}
            ref={(input=>{this.inputEmail = input})}
          />
          <button>SAVE</button>
       </form>
    );
  }
}

export default RegistrationForm;
