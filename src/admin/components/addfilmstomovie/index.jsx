import axios from 'axios';
import React, { useState } from 'react'

const ADDFILMS = () => {

    const [video , setVideo] = useState("")
    const [Episode , setEpisode] = useState("")
    const [id , setId] = useState("")
    const handleCreateSeriesMovie = () => {
        axios({
            method : "post",
            url : process.env.REACT_APP_BASE_URL_API + "api/movie/create",
            data : {
                video,
                Episode,
                _id : id
            }
        })
        .then(res => {
            return 1
        })
        .catch(err => {
            console.log(err);
        })
    }
  return (
    <div>
        <span>_id movie</span>
        <input value={id} onChange={(e) => {
            setId(e.target.value)
        }} placeholder='id movie' type='text' />
        <span>video</span>
        <input value={video} onChange={(e) => {
            setVideo(e.target.value)
        }} placeholder='video' type='text' />
        <span>tập</span>
        <input value={Episode} onChange={(e) => {
            setEpisode(e.target.value)
        }} placeholder='tập' type='text' />
        {id && Episode && video && <input type='submit' onClick={handleCreateSeriesMovie} />}
    </div>
  )
}

export default ADDFILMS