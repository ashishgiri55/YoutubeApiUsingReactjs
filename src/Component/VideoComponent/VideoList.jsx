import React from 'react';
import VideoItem from "./VideoItem";

function VideoList({videos,onSelectedVideo}) {
   const renderVideo = videos.map((video) => {
        return <videoItem  video = {video} key={video.id.videoId} />;
    
    return (
       <videoItem
       video={video}
       key={video.id.videoId}
       onSelectedVideo ={onSelectedVideo}
       />
    );
});
  return(
      <div>
          <h1>{renderVideo}</h1>
      </div>
  );
}

export default VideoList;
