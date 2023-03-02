import { Carousel } from 'react-bootstrap';
import "./Home.css"
import Slider from './Slider';
const Hero = () => {
  
  const images = [
    'http://res.cloudinary.com/oramas/image/upload/v1676232595/image/upload/q1cnou56ugh7dzk3ofpc.jpg',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4hc76ier5ok0l0qTNfNI2ijZIq0klPcv0IhZ_Lwhfs7G-P-FG8py3txfHaZFqHkX3yYemmMoG2fuxnpMcI8synVlt36szReyWoYc31yT4DvnccA0CTh67lCYiVhJoT62jIW_3LoHwG8xp-PJNyC8PZbKJvsfvslebadvYG0qxVcLJ3U_D6fw7xVHH/s1280/IMG_20230112_153027.jpg',
    "http://res.cloudinary.com/oramas/image/upload/v1676232496/image/upload/eaxs9usmeoya51n0qloe.jpg",
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
  <Slider  />;
    </>
  );
};
export default Hero;
