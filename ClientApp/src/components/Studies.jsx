import React from 'react'
import { Link } from 'react-router-dom'
import studies from './studies.scss'
import ReactPlayer from 'react-player'

const Studies = () => {
  return (
    <>
      <div className="studies">
        <h1>Case Studies</h1>
        <div className="movies">
          <ReactPlayer
            className="movie"
            url="https://www.youtube.com/watch?v=YeaWpr8umZc&t=63s"
          />
          <ReactPlayer
            className="movie"
            url="https://www.youtube.com/watch?v=IMeain2cvBM"
          />
          <ReactPlayer
            className="movie"
            url="https://www.youtube.com/watch?v=vKSb_79haK4"
          />
          <ReactPlayer
            className="movie"
            url="https://www.youtube.com/watch?v=V6SfEIoEHY0"
          />
        </div>
      </div>
    </>
  )
}

export default Studies
