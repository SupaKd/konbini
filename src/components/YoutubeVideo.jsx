import React from "react";
import "./YoutubeVideo.scss";

function YoutubeVideo() {
  return (
    <div className="youtube-video">
      <iframe
        src="https://www.youtube.com/embed/b1MZpJlA3Ro"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default YoutubeVideo;
