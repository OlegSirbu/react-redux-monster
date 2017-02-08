import React, {Component} from 'react';
import {connect} from 'react-redux';

// import Menu from './Menu';
// import logo from './logo.svg';
// import './App.css';

// import Header from './Header';
// import RegistrationForm from './RegistrationForm';

// const menu = [
//   {
//     link:'/articles',
//     label: 'Articles'
//   },
//   {
//     link:'/contacts',
//     label: 'Contacts'
//   },
//   {
//     link:'/post',
//     label: 'Post'
//   }
// ];

class App extends Component {
    addTrack() {
        console.log('props', this.props);
        this.props.onAddTrack(this.inputTrack.value);
        this.inputTrack.value = '';
    }

    render() {
        return (
            <div>
                <input type='text' ref={(input)=>{this.inputTrack = input}}/>
                <button onClick={this.addTrack.bind(this)}>Add track</button>
                <ul>
                    {
                        this.props.testStore.map((track, index) =>
                            <li key={index}>{track}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch =>({
        onAddTrack: (trackName)=> {
            dispatch({type: 'ADD_TRACK', payload: trackName})
        }
    })
)(App);


