import React, { Component } from 'react'
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
    state={
        track_list: [
            {track: {track_name: 'abc'}},
            {track: {track_name: 'asd'}},
            {track: {track_name: 'e32'}},
            {track: {track_name: '123'}}
        ],
        heading: 'Top 10 tracks'
    }

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=us&f_has_lyrics=1&apikey=a7c365fd79b9c3ff7a81496c5493a4e1`)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    

    render() {
        return (
        <Context.Provider value={this.state}>
        {this.props.children}
        </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
