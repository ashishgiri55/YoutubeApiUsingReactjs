import React from 'react'

function VideoDetails({video,loading}) {
    if(!video){
        return "loading...";
    }

    let videourl = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <iframe 
            width="100%"
             height="500" 
             src={videourl}
              frameborder="0"
               allow="accelerometer; autoplay; 
               encrypted-media; gyroscope;
                picture-in-picture" allowfullscreen="true"></iframe>
           <h1>{video.snippet.title}</h1> 
        </div>
    );
}

export default VideoDetails;
