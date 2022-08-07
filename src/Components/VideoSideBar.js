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

  let { likes, messages, shares, favorite, onClickProfile} = props;

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
  //   return (<AccountCircleIcon
  //     label="Recents"
  //     icon={
  //       <img
  //         src="https://images.statusfacebook.com/profile_pictures/babies/babies_profile_picture4.jpg"
  //         alt=""
  //       />
  //     }
  //     fontSize="medium"
  //   />)
  // };

  return (
    <div className={classes.videoSideBar}>
      <div className={classes.videoSideBar__button}>
        <PlaylistAddCircleIcon onClick={onClickProfile} fontSize="medium" />
        <p>{likes}</p>
      </div>
      <div className={classes.videoSideBar__button}>
        {liked ? (
          <FavoriteIcon
            fontSize="medium"
            onClick={() => {
              setLiked(false);
            }}
          />
        ) : (
          <FavoriteBorderIcon
            fontSize="medium"
            onClick={() => {
              setLiked(true);
            }}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className={classes.videoSideBar__button}>
        <MessageIcon fontSize="medium" />
        <p>{messages}</p>
      </div>
      <div className={classes.videoSideBar__button}>
        {posted ? (
          <BookmarkIcon
            fontSize="medium"
            onClick={(e) => {
              setPosted(false);
            }}
          />
        ) : (
          <BookmarkBorderIcon
            fontSize="medium"
            onClick={(e) => {
              setPosted(true);
            }}
          />
        )}
        <p>{posted ? favorite + 1 : favorite}</p>
      </div>
      <div className={classes.videoSideBar__button}>
        <ShareIcon fontSize="medium" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSideBar;
