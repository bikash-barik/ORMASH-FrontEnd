/* eslint-disable jsx-a11y/no-distracting-elements */
import odishaLogo from '../../../assets/logo/odisha-logo.png';
import headerLogo from '../../../assets/images/header-logo.png';
import cmImg from '../../../assets/images/cm_on_nav.png';

const LogoSection = () => {
  return (
    <nav role='navigation'>
      <div className='top-brand'>
        <div className='mx-auto container-fluid'>
          <div className='row px-4 m-0 height d-flex justify-content-between align-items-center'>
            <div className='col-md-4 col-12 d-flex justify-content-start  '>
              <div className='navbar-brand d-flex align-item-center height '>
                <img
                  className='d-none d-sm-block'
                  src={odishaLogo}
                  alt='Odisha Logo'
                />
                {/* <span>Odisha Rural Development &amp; Marketing Society</span>
                        <span>Goverment of Odisha</span>     */}
              </div>
            </div>
            <div className='col-md-4 col-12 d-flex  align-item-center '>
              <div className=''>
                <a href='/#'>
                  <img
                    src={headerLogo}
                    alt=''
                    className='mobile-none'
                    style={{ height: '84px', width: '100%' }}
                  />{' '}
                </a>
                <marquee
                  behavior=''
                  className='mobile-none'
                  direction=''
                  // style="color: black; font-family:Brush Script MT; font-size:19px; margin-top: -13px;"
                  style={{
                    color: 'black',
                    fontSize: '19px',
                    marginTop: '-13px',
                    fontFamily:"Brush Script MT",
                  }}
                >
                  Creating Competence and Values in Rural Odisha
                </marquee>
              </div>
            </div>
            <div className='col-md-4 d-flex align-items-end justify-content-end height'>
              <div className='d-flex right-logo'>
                <p>
                  <strong>Shri Naveen Patnaik</strong>
                  <br />
                  Hon'ble Chief Minister
                </p>

                <img
                  style={{ width: '105px', height: '120px' }}
                  src={cmImg}
                  alt=''
                  className='brand-logo right'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default LogoSection;
