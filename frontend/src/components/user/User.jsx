import React from 'react'
import './user.css'
import Share from '../../share/Share'
import Middle from '../../pages/Home/middleBlock/Middle'
import { Link } from 'react-router-dom'
import Saved from '../../pages/Home/saved/Saved'
import Tagged from '../../pages/Home/tagged/Tagged'
import MyPost from '../../pages/Home/myPost/MyPost'
import BottomBar from '../BottomBar/BottomBar'

function User({user}) {
  console.log(user)
  
  if(!user.data ){
    return <div className="loding">loding</div>
  }
  console.log(user.data.username)
  return (
    <div className='userWrapper'>
       <div className="profileTop">
       
           <div className="profileTopLeft">
           <img src="/assets/person/nate.jpg" className="profileWall" alt="" />
             <div className="userDetail">
                    <div className='userName'>
                    <span>{user.data.username}</span>
                </div>
                <div className='userName'>
                    <span> Followers </span>
                    <div>{user.data.followers.length}</div>
                </div>
                <div className='userName'>
                    <span>Following</span>
                    <div>{user.data.followings.length}</div>
                </div>
                <div className='userName'>
                    <span>Notes</span>
                    <div> 52 </div>
                </div>
          
             </div>
           </div>
           <div className="profileTopRight">
               
           </div>
       </div>
      
            

    </div>
  )
}

export default User