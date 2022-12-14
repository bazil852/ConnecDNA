import React from "react";

const YoutubeEmbed = () => (
  <div className="video-responsive" style={{
    overflow: 'hidden',
    paddingBottom: '56.25%',
    position: 'relative',
    height: '0'
  }}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/Nr6SV3ef3MI`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      style={{
        left: '0',
    top: '0',
    height: '100%',
    width: '100%',
    position: 'absolute'
      }}
    />
  </div>
);



export default YoutubeEmbed;