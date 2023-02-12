import { useState } from 'react';
import './videogallery.css';

const videos = [
  {
    id: 1,
    title: 'Sisir Saras 2023',
    src: 'https://ijentech.com/ormas-newdesign/assets/video/Video2.mp4',
  },
  {
    id: 2,
    title: 'Function',
    src: 'https://ijentech.com/ormas-newdesign/assets/video/video1.mp4',
  },
];

const VideoGallery = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const setVideo = (i) => {
    setCurrentVideo(i);
  };

  return (
    <div className='gallery_container'>
      <h1 className='text-center mb-8 g-title'>Video Gallery</h1>
      <div className='video_gallery'>
        <div className='video'>
          <video className='w-full border-2' muted>
            <source src={videos[currentVideo].src} type='video/mp4' />
          </video>
        </div>
        <div className='video_list'>
          {videos.map((video, i) => (
            <button
              key={video.id}
              className='video_item'
              onClick={() => setVideo(i)}
            >
              <h2>{video.title}</h2>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default VideoGallery;
