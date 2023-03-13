import { useEffect, useState } from 'react';
import './products.css';

const list = [
  {
    id: 1,
    src: './assets/Products/p4.png',
  },
  {
    id: 2,
    src: './assets/Products/p5.png',
  },
  {
    id: 3,
    src: './assets/Products/p6.png',
  },
  {
    id: 4,
    src: './assets/Products/p7.png',
  },
  {
    id: 5,
    src: './assets/Products/p11.png',
  },
];

const Products = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const prev = () =>
    currentSlideIndex === 0
      ? setCurrentSlideIndex(list.length - 1)
      : setCurrentSlideIndex(currentSlideIndex - 1);

  const next = () =>
    currentSlideIndex === list.length - 1
      ? setCurrentSlideIndex(0)
      : setCurrentSlideIndex(currentSlideIndex + 1);

  useEffect(() => {
    const changeSlide = () => {
      if (currentSlideIndex === list.length - 1) {
        setCurrentSlideIndex(0);
      } else if (currentSlideIndex === 0) {
        setCurrentSlideIndex(list.length - 1);
      } else {
        setCurrentSlideIndex(currentSlideIndex + 1);
      }
    };
    const timer = setTimeout(() => {
      changeSlide();
    }, 2000);

    return () => clearTimeout(timer);
  });

  console.log(currentSlideIndex);

  return (
    <section   style={{
      width: "100%",
      background: "linear-gradient(to bottom, #5f2c82, #49a09d)",
    }}>
      <div class='row'>
          <div
            class='col-12 section-intro text-center'
            style={{ marginTop: '20px' }}
          >
            <h2 className='g-title'>Our Products</h2>
          </div>
        </div>
      <div class='container-fluid py-8'>
        
        

        {list.map(
          (item, i) =>
            currentSlideIndex === i && (
              <div key={item.id} class='slide-container active'>
                <div class='slide row'>
                  <div class='image col-lg-5'>
                    <img src={item.src} alt='' />
                  </div>
                  <div class='content col-lg-6 p-4'>
                    <h3>Craft Design</h3>
                    <p className='my-2'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ab architecto voluptas, minima facere aperiam soluta esse
                      necessitatibus nulla nisi, fugit impedit obcaecati, non
                      commodi a? Animi voluptatibus quam dicta delectus?
                    </p>
      <button className="button px-4 py-1 mt-4" style={{verticalAlign: "middle"}}><span>    Know More </span></button>

                    {/* <a href='/#' class='btn p-1 px-4'>
                      Know More
                    </a> */}
                  </div>
                </div>
              </div>
            )
        )}
        <button id='prev' onClick={prev}>
          {' '}
          {'<'}{' '}
        </button>
        <button id='next' onClick={next}>
          {' '}
          {'>'}{' '}
        </button>
      </div>
    </section>
  );
};
export default Products;
