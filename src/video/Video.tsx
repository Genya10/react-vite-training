import './video.css'
import { PropsVideo } from "../types/video-type";
import { useState } from 'react';

export function Video(props:PropsVideo) {

const {title,name,img} = props

const [likesCount,setLikesCount] = useState(0)
const increseLikes =()=>{
  setLikesCount(likesCount +1 )
  console.log(name, likesCount)
}

  return (
    <>
      <div className="video-container">
        <div className="video">
          <img className="video-img" src={img} alt="video image" />         
          <h3>{title}</h3>
          <b>{name}</b>       
          <div className="video-footer">
            <p>Likes: {likesCount}</p>
            <button onClick={increseLikes}>Like</button>
          </div>
        </div>
      </div>
    </>
  );
}
