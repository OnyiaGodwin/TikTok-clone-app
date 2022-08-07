import React, { useRef, useState } from "react";

//import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar";
import classes from "./Video.module.css";

function Video(props) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const { url, channel, description, song, likes, messages, shares, favorite } =
    props;

  const videoPressHandler = () => {
    if (playing) {
      setPlaying(false);
      videoRef.current.pause();
      //<PlayArrowIcon fontSize="large" className={classes.video__playIcon}/>
    } else {
      setPlaying(true);
      videoRef.current.play();
    }
  };

  return (
    <div className={classes.video}>
      <video
        className={classes.video__player}
        src={url}
        //https://ftp.nluug.nl/pub/graphics/blender/demo/movies/ToS/tears_of_steel_720p.mov
        loop
        ref={videoRef}
        onClick={videoPressHandler}
        type="video/mp4"
      />     

      {/** VideoFooter*/}
      <VideoFooter channel={channel} description={description} song={song} />
      {/** VideoSideBar*/}
      <VideoSideBar
        likes={likes}
        shares={shares}
        messages={messages}
        favorite={favorite}
      />
    </div>
  );
}

export default Video;
