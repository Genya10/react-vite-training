import reactLogo from "../assets/react.svg";


export function Video() {
  return (
    <>
      <div className="video-container">
        <div className="video">
          <img className="video-img" src={reactLogo} alt="video image" />
          <p className="">Video 1</p>
          <p className="">Kuzyashev js</p>
          <div className="video-footer">
            <p className="">Likes:0</p>
            <button>Like</button>
          </div>
        </div>
      </div>
    </>
  );
}
