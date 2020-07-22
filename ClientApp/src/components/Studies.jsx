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
            url="https://www.youtube.com/watch?v=uq4Hyod5agc"
          />
          <ReactPlayer
            className="movie"
            url="https://www.youtube.com/watch?v=lR862Vzd8_A"
          />
          <ReactPlayer
            className="movie"
            url="https://www.youtube.com/watch?v=rS8zM5ELxaY"
          />
          {/* <ReactPlayer
              className="movie"
              url="https://www.youtube.com/watch?v=V6SfEIoEHY0"
            /> */}
        </div>
      </div>
      {/* <div className="div-line"></div> */}
    </>
  )
}

export default Studies
