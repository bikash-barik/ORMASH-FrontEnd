import './gallery.css';

const Gallery = () => {
  return (
    <div className='gallery_container'>
      <h1 className='text-center mb-8 g-title'>Photo Gallery</h1>
      <div className='gallery'>
        {Array.from({ length: 6 }).map((_, i) => (
          <div className='gallery_card' key={i}>
            <img src={`./assets/festivals/pic${i + 1}.jpeg`} alt='' />
          </div>
        ))}
      </div>
      <div className='text-center'>
        <a href='/#' className='btn  mt-8 bg-primary text-white px-4 py-2'>
          View All
        </a>
      </div>
    </div>
  );
};
export default Gallery;
