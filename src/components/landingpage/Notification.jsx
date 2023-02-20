/* eslint-disable jsx-a11y/no-distracting-elements */
const Notification = ({style,zoomLevel}) => {
  return (
    <div
      className={`d-flex align-items-center p-2  scroll-container text-light text-decoration-none ${style}`}
     
    >
      &nbsp;
      <marquee
        behavior='scroll'
        direction='left'
        style={{ fontSize: `${zoomLevel}px`}}
        // onMouseOver='this.stop();'
        // onMouseOut='this.start();'
      >
        <a class='text-light text-decoration-none' href='/#'>
          Corrigendum for Outsource Agency{' '}
        </a>
        ||{' '}
        <a class='text-light text-decoration-none text-light' href='/#'>
          {' '}
          EoI - SAGARMALA PHASE - II-extended upto 03.1.2023
        </a>
        ||{' '}
        <a class='text-light text-decoration-none' href='/#'>
          {' '}
          Corrigendum for Outsource Agency{' '}
        </a>
        ||{' '}
        <a class='text-light text-decoration-none' href='/#'>
          EoI - SAGARMALA PHASE - II-extended upto 03.1.2023
        </a>{' '}
        ||{' '}
        <a class='text-light text-decoration-none' href='/#'>
          Corrigendum for Outsource Agency
        </a>{' '}
        ||{' '}
        <a class='text-light text-decoration-none' href='/#'>
          {' '}
          EoI - SAGARMALA PHASE - II-extended upto 03.1.2023
        </a>
      </marquee>
      <img
        src='./assets/gify.gif'
        alt='notifications'
        style={{ width: '24px', height: '24px' }}
      />
    </div>
  );
};
export default Notification;
