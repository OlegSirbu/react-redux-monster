import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    addTrack() {
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
                        this.props.tracks.map((track, index) =>
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
        tracks : state.tracks
    }),
    dispatch =>({
        onAddTrack: (trackName)=> {
            dispatch({type: 'ADD_TRACK', payload: trackName})
        }
    })
)(App);


