import './team.css';

const Team = () => {
  return (
    <section
      style={{
        width: '100%',
        background: 'linear-gradient(to bottom, #5f2c82, #49a09d)',
      }}
    >
      <div className='cards_wrapper'>
        {/* first */}
        <div className='profile_card'>
          <div className='profile_card_img'>
            <img src='./assets/members/guha.jpg' alt='' />
          </div>
          <div class='profile_card_desc'>
            <h1>Ms Guha Poonam Tapas Kumar,IAS</h1>

            <p class=''>Chief Executive Officer</p>
            <p class=''>guha.ormashq@gmail.com</p>
          </div>
        </div>

        {/* second */}
        <div className='profile_card'>
          <div className='profile_card_img'>
            <img src='./assets/members/sushil.jpg' alt='' />
          </div>

          <div class='profile_card_desc'>
            <h1>Shri Sushil Kumar Lohani,IAS</h1>

            <p class=''>Principal Secretary, PR & DW Dept.</p>
            <p class=''>sushil.ormashq@gmail.com</p>
          </div>
        </div>

        {/* third */}
        <div className='profile_card'>
          <div className='profile_card_img'>
            <img src='./assets/members/pradip.jpg' alt='' />
          </div>

          <div class='profile_card_desc'>
            <h1>Shri Pradip Kumar Amat</h1>

            <p class=''>Hon'ble Minister, PR & DW Dept.</p>
            <p class=''>pradip.ormashq@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team;
