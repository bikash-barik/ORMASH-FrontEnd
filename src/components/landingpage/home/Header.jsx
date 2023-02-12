const Header = () => {
  return (
    <header>
      <div className='sub-header'>
        <div className='container-fluid'>
          <div className='row justify-content-md-center'>
            <div className='col'>
              <ul className='left-info'>
                <li>
                  <a
                    href='https://www.odisha.gov.in/'
                    title='Government of Odisha'
                  >
                    Goverment of Odisha{' '}
                    <span className='px-2'>| ଓଡ଼ିଶା ସରକାର</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-md-auto d-none d-sm-block'>
              <ul className='left-info'>
                <li>
                  <a
                    href='/#'
                    className='text-warning'
                    title='Government of Odisha'
                  >
                    RTI | Feedback | Annual Report
                    <span className='px-3 text-white'>| ଓଡ଼ିଶା</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col col-lg-2 d-none d-sm-block'>
              <ul className='right-icons'>
                <li className='bg-primary'>
                  <a href='/#'>
                    <i className='fa fa-facebook'></i>
                  </a>
                </li>
                <li className='bg-info'>
                  <a href='/#'>
                    <i className='fa fa-twitter'></i>
                  </a>
                </li>
                <li className='bg-primary'>
                  <a className='' href='/#'>
                    <i className='fa fa-linkedin'></i>
                  </a>
                </li>
                <li className='bg-danger'>
                  <a href='/#'>
                    <i className='fa fa-youtube'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
