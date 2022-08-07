import React from "react";

import MusicNoteIcon from "@mui/icons-material/MusicNote";
import classes from "./VideoFooter.module.css";
import Ticker from "react-ticker";

function VideoFooter(props) {
  const { channel, description, song } = props;

  return (
    <div className={classes.videoFooter}>
      <div className={classes.videoFooter__text}>
        <h3>@{channel}</h3>
        <p>{description}</p>

        <div className={classes.videoFooter__ticker}>
          {/* Music Note Image */}
          <MusicNoteIcon className={classes.videoFooter__icon} />

          {/**The display message at the footer */}
          <div className={classes.videoFooter__ticker__music}>
            <Ticker mode="smooth" offset="run-in" >
              {({ index }) => (
                <>
                  <p>{song}</p>
                </>
              )}
            </Ticker>
          </div>
        </div>
      </div>
      <img
        className={classes.videoFooter__record}
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
