import { Chat, Notifications, Person, Search } from '@mui/icons-material'
import React, { useContext } from 'react'
import './topBar.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

function TopBar() {
     //  const name1 = 'harshit rajput'
     const {user} = useContext(AuthContext)
     // const username = user.username
     if(!user ){
          return <div className="loding">loding</div>
        }
     //    else{
     //      console.log(user)
     //    }
     console.log(user.data.username)
     
  return (
    <div className='topBarContainer'>
       <div className='topBarLeft'>
           <Link to='/'>
             <img src='/assets/person/logo1.png' className='logoImg'/>
             </Link>
       </div>
       <div className='topBarCenter'>
         <div className="searchBar">
         <Search color='warning'/>
         <input placeholder='search for friend , post or video' className='searchInput'/>
         </div>
       </div>
       <div className='topBarRight'>
           <div className='topBarLinks'>
                <span className='topBarLink'>Homepage</span>
                <span className='topBarLink'>Timeline</span>
           </div>
           <div className='topBarIconItem'>
                <Person/>
                <span className='topBarIconBadge'>1</span>
           </div>
           <Link to={`/messenger/${user.data.username}`} onClick={(e) => e.preventdefault()}>
           <div className='topBarIconItem'>
           <Chat/>
           <span className='topBarIconBadge'>2</span>
      </div>
           </Link>
          
           <div className='topBarIconItem'>
                <Notifications/>
                <span className='topBarIconBadge'>1</span>
           </div>
           <Link to={`/profile/${user.data.username}/myPost`} onClick={() => console.log("Link clicked")}><img src='' alt='' className='topBarImg'/>
           </Link>

       </div>
    </div>
  )
}

export default TopBar