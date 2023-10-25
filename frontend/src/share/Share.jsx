import React from 'react'
import './share.css'
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'

function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
        <div className="shareTop">
            <img src="/assets/person/dp.jpg" className='feedImg'/>
                <input
                placeholder="what's inn your mind Safak? "
                className='shareInput'
                />
        </div>
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                    <PermMedia htmlColor='blue' className='shareIcon'/>
                        <span>photos or video</span>

                    </div>
                    <div className="shareOption">
                    <Label htmlColor='pink' className='shareIcon'/>
                        <span>Tag</span>

                    </div>
                    <div className="shareOption">
                    <Room htmlColor='green' className='shareIcon'/>
                        <span>Location</span>

                    </div>
                    <div className="shareOption">
                    <EmojiEmotions htmlColor='yellow' className='shareIcon'/>
                        <span>Feelings</span>

                    </div>
                    <button className='shareButton'>Share</button>
                </div>
        </div>
    </div>
  )
}

export default Share