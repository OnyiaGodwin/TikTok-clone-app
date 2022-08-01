import { useEffect, useState } from "react";

import Video from "./Components/Video";
import db from "./firebase";
import "./App.css";


function App() {
  // pulling videos from firebase database
  // NB: the result from the firebase database is in array[];
  const [videos, setVideos] = useState([]);

  //pulling data from firebase database ie server storage using useEffect()
  useEffect(() => {
    //Using firebase Config pattern:
    db.collection("videos").onSnapshot((snapshot) => {
      setVideos(
        snapshot.docs.map((doc) => {
          return doc.data();
        })
      );
    });
  }, []);

  return (
    //BEM Convention(CSS)
    <div className="app">
      <div className="app__videos">
        {videos.map((el) => {
          return (
            <Video
              key={Math.random()}
              url={el.url}
              channel={el.channel}
              song={el.song}
              likes={el.likes}
              messages={el.messages}
              description={el.description}
              shares={el.shares}
              favorite={el.favorite}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
