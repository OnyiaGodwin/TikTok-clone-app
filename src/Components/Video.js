import React, { useRef, useState } from "react";

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
        loop
        ref={videoRef}
        onClick={videoPressHandler}
        type="video/mp4"
        /**OR*/
        /*onClick={
          playing
            ? videoRef.current.pause() && setPlaying(false)
            : videoRef.current.play() && setPlaying(true)
        }*/
      > <source src={url} type="video/mp4" /></video>

      {/** VideoSideBar*/}

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
