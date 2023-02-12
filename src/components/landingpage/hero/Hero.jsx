import { Carousel } from 'react-bootstrap';

const Hero = () => {
  return (
    <section id='home' class='hero'>
      <div class='hero-container h-75'>
        <Carousel>
          <Carousel.Item>
            <img decoding='async' src='./assets/ban2.jpeg' alt='First slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img
              decoding='async'
              src='./assets/Bannew1.jpeg'
              alt='Third slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              decoding='async'
              src='./assets/Bannew2.jpeg'
              alt='Second slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              decoding='async'
              src='./assets/festivals/pic8.jpeg'
              alt='Third slide'
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};
export default Hero;
