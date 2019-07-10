import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Spinner from '../components/layout/Spinner';
import {Link} from 'react-router-dom';

const Lyrics = (props) => {
    const id = props.match.params.id;
    const [loading, setLoading] = useState(true);
    const [song, setSong] = useState('');
    const [lyric, setLyric] = useState('');

    useEffect(()=>{

        const fecthSong = async () => {
            setLoading(true);
            const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=a7c365fd79b9c3ff7a81496c5493a4e1`)
            setSong(res.data.message.body.track);
            setLoading(false);
            console.log(res.data.message.body.track)
          }
          
        const fecthLyrics = async () => {
          setLoading(true);
          const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=a7c365fd79b9c3ff7a81496c5493a4e1`)
          setLyric(res.data.message.body.lyrics);
          setLoading(false);
         // console.log(res.data.message.body.lyrics)
        }

        fecthSong();
        fecthLyrics();
      }, [id]);

      const checkGenre = () => {
        var result = "not listed";
        if (typeof(song.primary_genres) !== 'undefined'){
          try{
            result = song.primary_genres.music_genre_list[0].music_genre.music_genre_name_extended; 
          }catch(err){
            //console.log(err)
          }
         
        }
        return result;
      }

        const Loaded = (<div className="card">
          <h5 className="card-header"><strong>{song.track_name}</strong> <span className="text-secondary">by {song.artist_name}</span></h5>
          <div className="card-body"><div className="card-text"><p>{lyric.lyrics_body}</p></div></div>
          <ul className="list-group mt-3">
          <li className="list-group-item">
          <strong>Album</strong>: {song.album_name}
          </li>
          <li className="list-group-item">
          <strong>Genre</strong>: {checkGenre()}
          </li>
          <li className="list-group-item">
          <strong>Rating</strong>: {song.track_rating}
          </li>
          </ul>
      </div>);
      
      return (
        <React.Fragment>
        <Link to="/" className="btn btn-dark btn-sm mb-4 ml-4"> Go back</Link>
        {loading ? <Spinner /> : Loaded }
        </React.Fragment>
      );
      }
   

export default Lyrics
