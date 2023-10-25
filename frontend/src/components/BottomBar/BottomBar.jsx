import React from 'react'
import './bottom.css'
import { Link } from 'react-router-dom'


function BottomBar() {
  return (
    
    <div className="profileBottomBar">
    <Link to="/profile/:username/myPost">My Post</Link>
    <Link to="/profile/:username/saved">Saved</Link>
    <Link to="/profile/:username/tagged">Tagged</Link>

    </div>
  )
}

export default BottomBar
