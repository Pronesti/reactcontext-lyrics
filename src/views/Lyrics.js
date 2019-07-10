import React, {useState, useEffect} from 'react';
import axios from 'axios'

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
          console.log(res.data.message.body.lyrics)
        }

        fecthSong();
        fecthLyrics();
      }, [id]);
    return (
        <div>
            <h1>{song.track_name}</h1> <h3>by {song.artist_name}</h3>
            <p>{lyric.lyrics_body}</p>
        </div>
    )
}

export default Lyrics
