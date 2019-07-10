import React from 'react';
import {Consumer} from '../../context';
import Spinner from '../layout/Spinner';
import Track from './Track';

const Tracks = () => {

    return (
        <Consumer>
            {value => {
                const {track_list, heading} = value;
                if(track_list === undefined || track_list.length ===0){
                    return <Spinner />
                }else{
                    return (<React.Fragment>
                        <h3 className="text-center mb-4">{heading}</h3>
                        <div className="row">
                        {track_list.map((item,index) => <Track track={item.track} key={index} /> )}
                        </div>
                        </React.Fragment>)
                }
            }}
        </Consumer>
    )
}

export default Tracks;
