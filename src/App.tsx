import { Video } from "./video/Video";
import "./App.css";
import { videos } from "./video/videos";

function App() {
  return (
    <>
      {videos.map((vidos) => {
        return (
          <Video
            key={vidos.id}
            name={vidos.name}
            img={vidos.img}
            likes={vidos.likes}
          />
        );
      })}
    </>
  );
}

export default App;
