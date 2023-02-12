const Navbar = () => {
  return (
    <nav
      className='navbar navbar-expand-lg w-full navbar-dark bg-dark'
      id='navigationBar'
      style={{ zIndex: '999' }}
    >
      <div className='container d-flex g-2 p-2 align-items-center'>
        <button
          type='button'
          className='navbar-toggler'
          data-toggle='collapse'
          data-target='#navSupportContent'
          aria-controls='navSupportContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span>
            <i className='fa fa-bars'></i>
          </span>
        </button>

        <div
          className='collapse mx-auto navbar-collapse'
          id='navSupportContent'
        >
          <ul className='navbar-nav gx-2 mx-auto'>
            <li className='nav-item'>
              <a href='#home' className='nav-link active'>
                Home
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='/#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                About
              </a>
              <ul
                className='dropdown-menu'
                style={{
                  background:
                    'linear-gradient(to bottom, #5f2c82 ,#49a09d 99%)',
                }}
              >
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/Organisation.html'
                  >
                    Organisation
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/MissionandVision.html'
                  >
                    Mission and Vision
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/ContactDetailsHQDist.html'
                  >
                    Official Contact Details
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/Organogram.html'
                  >
                    Organogram
                  </a>
                </li>
              </ul>
            </li>

            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='/#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                DDU-GKY
              </a>
              <ul
                className='dropdown-menu'
                style={{
                  background:
                    'linear-gradient(to bottom, #5f2c82 ,#49a09d 99%)',
                }}
              >
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/DDU-GKY/DDU-GKYTrainingSectors.html'
                  >
                    DDU-GKY-Training-Sectors
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/DDU-GKY/PhysicalMilestone.HTML'
                  >
                    DDU-GKY-Physical Milestone
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/DDU-GKY/DDU-GKY-TrainingTrades.html'
                  >
                    DDU-GKY-Training-Trades
                  </a>
                </li>
              </ul>
            </li>

            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='/#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Activities
              </a>
              <ul
                className='dropdown-menu'
                style={{
                  background:
                    'linear-gradient(to bottom, #5f2c82 ,#49a09d 99%)',
                }}
              >
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/#'
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/#'
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/#'
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='/#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Products
              </a>
              <ul
                className='dropdown-menu'
                style={{
                  background:
                    'linear-gradient(to bottom, #5f2c82 ,#49a09d 99%)',
                }}
              >
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/Products/Product.html'
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/Products/ProductsBrochure.html'
                  >
                    Products Brochure
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/Products/BalasoreProductCatlog.html'
                  >
                    Balasore Product Catlog
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/Products/Product-MayurbhanjSabai.html'
                  >
                    Product Catlog Mayurbhanj
                  </a>
                </li>
              </ul>
            </li>

            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='/#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Exhibition
              </a>
              <ul
                className='dropdown-menu'
                style={{
                  background:
                    'linear-gradient(to bottom, #5f2c82 ,#49a09d 99%)',
                }}
              >
                <li>
                  <a
                    className='dropdown-item border border-2 border-suuces'
                    href='/Pages/Exhibition/ExhibitionCalender.html'
                  >
                    Exhibition Calender
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/Exhibition/Reports.html'
                  >
                    Reports{' '}
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/Exhibition/SisirSaras2020.html'
                  >
                    SISIR SARAS 2020
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a href='/#' className='nav-link'>
                Tender
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
