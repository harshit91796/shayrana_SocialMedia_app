import React from 'react'
import "./sideBar.css"
import { Bookmark, Group, HelpOutline, PlayCircleFilledOutlined, WorkOutline } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className='sideBar'>
        <div className="sideBarWrapper">
            <ul className="sideBarList">
                <li className="sideBarListItem">
                       <PlayCircleFilledOutlined className='sideBarIcon'/>
                       <span  className='sideBarListItemText'>Play</span>
                </li>
                <li className="sideBarListItem">
                      <Group className='sideBarIcon'/>
                      <span className='sideBarListItemText'>Group</span>
                </li>
                <li className="sideBarListItem">
                     <Bookmark className='sideBarIcon'/>
                     <span className='sideBarListItemText'>Bookmark</span>
                </li>
                <li className="sideBarListItem">
                    <HelpOutline className='sideBarIcon'/>
                    <span className='sideBarListItemText'>Helpout</span>
                </li>
                
                <li className="sideBarListItem">
                    <WorkOutline className='sideBarIcon'/>
                    <Link to='/profile'><span className='sideBarListItemText'>Profile</span></Link>
                </li>
                
               
            </ul>
            <button className="sideButton">Show more</button>
            <hr className="sideBarHr" />
            <ul className="sideBarFriendList">
                    <li className="sideBarFriend">
                        <img src="/assets/person/dp.jpg" className='sideBarFriendImg'/>
                        <span>friend</span>
                    </li>

                <li className="sideBarFriend">
                    <img src="/assets/person/dp.jpg" className='sideBarFriendImg'/>
                    <span>friend</span>
                </li>

                <li className="sideBarFriend">
                  <img src="/assets/person/dp.jpg" className='sideBarFriendImg'/>
                  <span>friend</span>
                </li>

            <li className="sideBarFriend">
                <img src="/assets/person/dp.jpg" className='sideBarFriendImg'/>
                <span>friend</span>
            </li>
                 
            <li className="sideBarFriend">
            <img src="/assets/person/dp.jpg" className='sideBarFriendImg'/>
            <span>friend</span>
        </li>

        <li className="sideBarFriend">
        <img src="/assets/person/dp.jpg" className='sideBarFriendImg'/>
        <span>friend</span>
    </li>
            
            </ul>
        </div>
    </div>
  )
}

export default SideBar