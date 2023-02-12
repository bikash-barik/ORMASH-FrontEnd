import { Row, Col } from 'react-bootstrap';
import './footer.css';

const Copyright = () => {
  return (
    <Row xs={1} md={3}>
      <Col>
        <p>Copyright &copy; 2023 ORMAS, All right reserved.</p>
      </Col>

      <Col>
        <a
          class='pt-2 d-flex justify-content-between align-items-center mobileiconlicence'
          rel='license'
          href='http://creativecommons.org/licenses/by/4.0/'
        >
          <img
            class='w-14 h-6'
            alt='Creative Commons Licence'
            src='https://i.creativecommons.org/l/by/4.0/88x31.png'
          />
        </a>
        <p>
          {' '}
          This work is licensed under a{' '}
          <a rel='license' href='http://creativecommons.org/licenses/by/4.0/'>
            Creative Commons Attribution 4.0 International License
          </a>
        </p>
      </Col>

      <Col>
        <span class='text-right' style={{ textAlign: 'right' }}>
          Powered By{' '}
          <a
            href='https://ijentech.com/'
            style={{ textDecoration: 'none' }}
            target='_blank'
            rel='noreferrer'
          >
            <img
              src='https://ijentech.com/ormas-newdesign/assets/images/ijentechlogo.png'
              style={{ width: '48px' }}
              height='45px'
              alt='logo'
            />
          </a>
        </span>
      </Col>
    </Row>
    // <div
    //   class='row  text-center'
    //   style={{ background: 'linear-gradient(to bottom,#49a09d, #5f2c82 )' }}
    // >
    //   <div class='row container-fluid d-flex align-items-center g-0'>
    //
    //     <div class='col-md-6 col-12 '>
    //       <div
    //         class=''
    //         style={{ justifyContent: 'center', alignItems: 'center' }}
    //       >

    //       </div>
    //     </div>
    //     <div class='col-md-2 col-12 '>

    //     </div>
    //   </div>
    // </div>
  );
};
export default Copyright;
