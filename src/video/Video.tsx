import './video.css'
import { PropsVideo } from "../types/video-type";

export function Video(props:PropsVideo) {
  
const {name, likes,img} = props

  return (
    <>
      <div className="video-container">
        <div className="video">
          <img className="video-img" src={img} alt="video image" />
          <p className="">{name}</p>
          <p className="">Kuzyashev js</p>
          <div className="video-footer">
            <p className="">Likes:{likes}</p>
            <button>Like</button>
          </div>
        </div>
      </div>
    </>
  );
}
