import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    addTrack() {
        this.props.onAddTrack(this.inputTrack.value);
        this.inputTrack.value = '';
    }

    findTrack() {
        console.log('find', this.searchInput.value);
        this.props.onFindTrack(this.searchInput.value);
    }

    render() {
        return (
            <div>
                <div>
                    <input type='text' ref={(input)=>{this.inputTrack = input}}/>
                    <button onClick={this.addTrack.bind(this)}>Add track</button>
                </div>
                <div>
                    <input type='text' ref={(input)=>{this.searchInput = input}}/>
                    <button onClick={this.findTrack.bind(this)}>Find</button>
                </div>
                <ul>
                    {
                        this.props.tracks.map((track, index) =>
                            <li key={index}>{track.name}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        tracks: state.tracks
            .filter((track)=> {
            return track.name.includes(state.filterTracks)
        })
    }),
    dispatch =>({
        onAddTrack: (name)=> {
            const payload = {
                id: Date.now().toString(),
                name
            };
            dispatch({type: 'ADD_TRACK', payload})
        },
        onFindTrack: (name)=>{
            dispatch({type: 'FIND_TRACK', payload: name})
        }
    })
)(App);


