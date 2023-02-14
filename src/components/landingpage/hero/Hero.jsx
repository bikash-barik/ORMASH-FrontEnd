import { Carousel } from 'react-bootstrap';
import "./Home.css"
import Slider from './Slider';
const Hero = () => {
  
  const images = [
    'https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?cs=srgb&dl=pexels-pixabay-235985.jpg&fm=jpg',
    'https://img.freepik.com/free-photo/abstract-flowing-neon-wave-background_53876-101942.jpg?w=360',
    'https://img.freepik.com/free-vector/watercolor-stains-abstract-background_23-2149107181.jpg?w=2000',
  ];
  return (
    // <section id='home' class='hero'>
    //   <div class='hero-container'>
    //     <Carousel className='carousel'>
    //       <Carousel.Item>
    //         <img className='carousel' decoding='async' src='./assets/ban2.jpeg' alt='First slide' />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img className='carousel'
    //           decoding='async'
    //           src='./assets/Bannew1.jpeg'
    //           alt='Third slide'
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img className='carousel'
    //           decoding='async'
    //           src='./assets/Bannew2.jpeg'
    //           alt='Second slide'
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img className='carousel'
    //           decoding='async'
    //           src='./assets/festivals/pic8.jpeg'
    //           alt='Third slide'
    //         />
    //       </Carousel.Item>
    //     </Carousel>
    //   </div>
    // </section>
    <>
  <Slider images={images} />;
    </>
  );
};
export default Hero;
