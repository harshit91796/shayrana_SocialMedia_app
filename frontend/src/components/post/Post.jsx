import { Favorite, FavoriteBorder, MoreVert,  Send,  Textsms, TurnedInNot } from '@mui/icons-material'
import React, { useContext, useEffect, useState } from 'react'
import './post.css'
import axiosInstance from '../../api';

// import {format} from 'timeago.js'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

function Post({post}) {
  const [user1,setUser1] = useState({});
  const [like,setLike] = useState(0);
  const [isLiked,setIsLiked] = useState(false);
  const {user} = useContext(AuthContext)
  console.log(user)
  
  useEffect(() => {
    setIsLiked(post.likes.includes(user.data._id));
    setLike(post.likes.length);
  }, [user.data._id, post.likes]);
 
  useEffect(()=>{
    const fetchUser = async () => {
      try {
        const res = await axiosInstance.get(`/${post.userId}`);
        // console.log(res.data)

        setUser1(res.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  fetchUser();
  },[])

  const likeHandler = async () => {
    try {
      const res = await axiosInstance.put(`/${post._id}/likepost`, { userId: user.data._id });
      
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
      
    } catch (err) {
      console.error(err);
    }
  };
//  async function Like(){
//     setLike(isliked ? like-1 : like+1)
//     setIsLiked(!isliked)
//   }

  if(!user1.data ){
    return <div className="loding">loding</div>
  }
  //  if(user){
  //   console.log(user.data.username)
  
  //  }else{
  //   console.log('not found')
  
  //  }
  return (
    <div>
      <div className="postWrapper">
          <div className="postTop">
            <div className="postLeft">
             <Link to={`/profile/${user1.data.username}/myPost`} onClick={(e) => e.preventDefault()}><img src='/assets/person/4.jpg' className='img'/></Link>  
                <div className="postName">{user1.data.username}</div>
                <div className="postTime">1</div>
                </div>
                <div className="postRight"> 
                    <MoreVert/>
            </div>
          </div>
          <div className="post">
          
          </div>
          <div className="postAction">
               <div className="postIcon"  onClick={likeHandler}>
                   {isLiked ? <Favorite  className='like'/>:<FavoriteBorder  className='like'/>}
                   <div className="likeCount">{like}</div>
               </div>
               <div className="postIcon">
                   <Textsms className="comment"/>
                   <div className="commentCount">coment</div>
               </div>
               <div className="postIcon">
                   <Send className='send'/>
                   <div className="shareCount">50</div>
               </div>
               <div className="postIcon">
                   <TurnedInNot className='save'/>  
               </div>
          </div>
      </div>
    </div>
  )
}

export default Post