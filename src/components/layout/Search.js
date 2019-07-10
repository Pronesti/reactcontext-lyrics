import React, {useState} from 'react'
import axios from 'axios'
import {Consumer} from '../../context';

const Search = () => {
    const [songTitle, setSongTitle] = useState('');

    const searchSong = (dispatch, e) => {
        e.preventDefault();
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${songTitle}&page_size=10&page=1&s_track_rating=desc&apikey=a7c365fd79b9c3ff7a81496c5493a4e1`)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: 'SEARCH_TRACKS',
                payload: res.data.message.body.track_list
            })
        })
        .catch(err => console.log(err));
    }

    const handleChange = e => {
      setSongTitle(e.target.value)
    }

    return (
        <Consumer>
         {value => {
             return(
             <div className="card card-body mb-4 p-4">
             <h1 className="display-4 text-center">
             <i className="fas fa-music"></i> Search for a song
             </h1>
             <p className="lead text-center">Get the lyrics for any song.</p>
             <form onSubmit={searchSong.bind(this, value.dispatch)}>
             <div className="form-group">
             <input className="form-control form-control-lg mb-3" placeholder="Song title..." name="songTitle" value={songTitle} onChange={handleChange}></input>
             <button className="btn btn-dark btn-lg btn-block mb-3" type="submit">Submit</button>
             </div>
             </form>
             </div>);
         }}   
        </Consumer>
    )
}

export default Search
