import React from 'react'
import ReactPlayer from 'react-player'
import './dominion-trailer.css'

const DominionTrailerComponent = () => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url= {process.env.REACT_APP_VIDEO_PATH}
                width='100%'
                height='100%'
                loop={true}
                volume={0}
                playing={true}
                muted={true}
            />
        </div>
    )
}

export default DominionTrailerComponent