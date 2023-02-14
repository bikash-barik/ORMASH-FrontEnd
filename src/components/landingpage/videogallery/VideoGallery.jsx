// import { useState } from "react";
import "./videogallery.css";

import { useState } from "react";

function VideoGallery({ videos }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    // <div className="video-gallery">
    //   <div className="video-list">
    //     {videos.map((video, index) => (
    //       <div
    //         key={index}
    //         className={`video-item${selectedVideo === index ? ' active' : ''}`}
    //         onClick={() => setSelectedVideo(index)}
    //       >
    //         <div className="video-item-thumbnail">
    //           <img src={video.thumbnail} alt={video.title} />
    //         </div>
    //         <div className="video-item-title">{video.title}</div>
    //       </div>
    //     ))}
    //   </div>
    //   {selectedVideo !== null && (
    //     <div className="video-player">
    //       <iframe
    //         src={videos[selectedVideo].src}
    //         controls
    //         autoPlay
    //         onEnded={() => setSelectedVideo(null)}
    //       />
    //       <div className="video-player-title">{videos[selectedVideo].title}</div>
    //     </div>
    //   )}
    // </div>

    // <!-- Video Gallery -->
    <div className="bg-color ">
      <section className=" py-5 Container">
        <div class="container">
          <div className="row">
            <div className=" section-intro text-center">
              <h2 className="g-title">Video Gallery</h2>
            </div>
          </div>
          <div className="video-con mt-5">
            <div className="main-video">
              <div className="video">
                <iframe
                  src="https://ijentech.com/ormas-newdesign/assets/video/Video2.mp4"
                  controls
                  muted
                  autoplay
                  width="100%"
                  height={380}
                />
                <h4 className="title p-2">Sisir Saras 2023.</h4>
              </div>
            </div>
            <div className="video-list">
              <div className="vid active">
                <video
                  src="https://ijentech.com/ormas-newdesign/assets/video/Video2.mp4"
                  muted
                ></video>
                <h4 className="title">Sisir Saras 2023.</h4>
              </div>
              <div className="vid">
                <video
                  src="https://ijentech.com/ormas-newdesign/assets/video/Video2.mp4"
                  muted
                ></video>
                <h4 className="title">Funcation</h4>
              </div>
              <div className="vid">
                <video
                  src="https://ijentech.com/ormas-newdesign/assets/video/Video2.mp4"
                  muted
                ></video>
                <h4 className="title">Sisir Saras 2023.</h4>
              </div>
              <div className="vid">
                <video
                  src="https://ijentech.com/ormas-newdesign/assets/video/Video2.mp4"
                  muted
                ></video>
                <h4 className="title"> Sisir Saras 2023.</h4>
              </div>
              <div className="vid">
                <video
                  src="https://ijentech.com/ormas-newdesign/assets/video/Video2.mp4"
                  muted
                ></video>
                <h4 className="title">Sisir Saras 2023.</h4>
              </div>
              <div className="vid">
                <video
                  src="https://ijentech.com/ormas-newdesign/assets/video/Video2.mp4"
                  muted
                ></video>
                <h4 className="title">Video title goes here.</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VideoGallery;

// const VideoGallery = () => {
//   const [currentVideo, setCurrentVideo] = useState(0);

//   const setVideo = (i) => {
//     setCurrentVideo(i);
//   };

//   return (
//     <div
//       className=""
//       style={{
//         width: "100%",
//         background: "linear-gradient(to top, #5f2c82, #49a09d)",
//       }}
//     >
//       <h1 className="text-center mb-8 g-title">Video Gallery</h1>
//       <div className="video_gallery">
//         <div className="video">
//           <iframe
//             width="100%"
//             height="385"
//             src="https://www.youtube.com/embed/kVKKTJ9KgRw?autoplay=1&mute=1&loop=1"
//             src={`${Video}`}
//           ></iframe>
//           <video className='w-full border-2' muted>
//             <source src={videos[currentVideo].src} type='video/mp4' />
//           </video>
//         </div>
//         <div className="video_list">
//           {videos.map((video, i) => (
//             <button
//               key={video.id}
//               className="video_item"
//               onClick={() => setVideo(i)}
//             >
//               <h2>{video.title}</h2>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default VideoGallery;
