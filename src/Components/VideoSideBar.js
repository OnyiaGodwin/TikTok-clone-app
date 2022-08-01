import React, { useState } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
import PlaylistAddCircleIcon from "@mui/icons-material/PlaylistAddCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import classes from "./VideoSideBar.module.css";

function VideoSideBar(props) {
  const [liked, setLiked] = useState(false);
  const [posted, setPosted] = useState(false);

  let { likes, messages, shares, favorite } = props;

  // const clickHandler = () => {
  //   if (liked) {
  //     <FavoriteIcon fontSize="medium" />;
  //     setLiked(likes);
  //   } else {
  //     <FavoriteBorderIcon fontSize="medium" />;
  //     setLiked(likes);
  //   }
  // };

  // const profileHandler = () => {
  //   let like = 0;
  //   if (liked) {
  //     setLikedProfile(like);
  //   } else {
  //     like++;
  //     setLikedProfile(like);
  //   }
  // };

  // const clickHandler = (e) => {
  //   setLiked(true);
  // };

  return (
    <div className={classes.videoSideBar}>
      <div className={classes.videoSideBar__button}>
        <PlaylistAddCircleIcon fontSize="large"/>
        <p>{likes}</p>
      </div>
      <div className={classes.videoSideBar__button}>
        {liked ? (
          <FavoriteIcon
            fontSize="large"
            onClick={() => {
              setLiked(false);
            }}
          />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={() => {
              setLiked(true);
            }}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className={classes.videoSideBar__button}>
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className={classes.videoSideBar__button}>
        {posted ? (
          <BookmarkIcon
            fontSize="large"
            onClick={(e) => {setPosted(false)}}
          />
        ) : (
          <BookmarkBorderIcon
            fontSize="large"
            onClick={(e) => {setPosted(true)}}
          />
        )}
        <p>{posted ? favorite + 1 : favorite}</p>
      </div>
      <div className={classes.videoSideBar__button}>
        <ShareIcon />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSideBar;
