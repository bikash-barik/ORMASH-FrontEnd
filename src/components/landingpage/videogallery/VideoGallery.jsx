// import { useState } from "react";
import "./videogallery.css";

import { useState } from "react";

function VideoGallery({ videos }) {
  const [selectedVideo, setSelectedVideo] = useState(0);

  return (
    <>
      {/* <div className="video-gallery"> */}
        {/* <div className="video-list">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`video-item${
                selectedVideo === index ? " active" : ""
              }`}
              onClick={() => setSelectedVideo(index)}
            >
              <div className="video-item-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
              </div>
              <div className="video-item-title">{video.title}</div>
            </div>
          ))}
        </div> */}
        {/* {selectedVideo !== null && (
          <div className="video-player">
            <iframe
              src={videos[selectedVideo].src}
              controls
              autoPlay
              onEnded={() => setSelectedVideo(null)}
            />
            <div className="video-player-title">
              {videos[selectedVideo].title}
            </div>
          </div>
        )} */}
      {/* </div> */}

      {/* // <!-- Video G/allery --> */}
      <div className="bg-gd-color2 ">
        <section className=" py-5 Container">
          <div class="container">
            <div className="row">
              <div className=" section-intro text-center">
                <h2 className="g-title">Video Gallery</h2>
              </div>
            </div>
            <div className="video-con mt-5">
              <div className="main-video">
                {selectedVideo !== null && (
                  <div className="video">
                    <iframe
                      src={`${videos[selectedVideo].src}`}
                      controls
                      muted
                      autoplay
                      width="100%"
                      height={380}
                      onEnded={() => setSelectedVideo(null)}
                    />
                    <h4 className="title p-2">{videos[selectedVideo].title}</h4>
                  </div>
                )}
              </div>
              <div className="video-list">
                {videos.map((video, index) => (
                  <div 
                  className={`vid${
                    selectedVideo === index ? " active" : ""
                  }`}
                  key={index}  onClick={() => setSelectedVideo(index)}>
                    <video
                      src={video.src}
                      muted
                    ></video>
                    <h4 className="title">{video.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default VideoGallery;
