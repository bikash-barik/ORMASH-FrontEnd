import { Row, Col, Card, Button } from 'react-bootstrap';

const About = () => {
  return (
    <div className='about'>
      <Row xs={1} md={3} className='g-4'>
        <Col>
          <Card>
            <Card.Body className='pt-2'>
              <Card.Title>Mission/Vission</Card.Title>
              <Card.Text class='fs-12'>
                To enable the poor to improve their quality of life by
                delivering simple yet innovative, small yet high value solutions
                for strengthening their livelihood and skill options.
                <u>Vission</u> -To become a respected concern in the
              </Card.Text>
              <Button primary className='px-4 py-1 mt-4'>
                Read more
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Tender/Advertisement</Card.Title>
              <Card.Text class='fs-12'>
                <b>Closing Date</b> : 02-Jan-2023 <br /> Zoom Link for Pre-Bid
                Meeting for Impalement of Packaging Agencies <br />
                <b>Closing date</b> : 07-Jan-2023
              </Card.Text>
              <Button primary className='px-4 py-1 mt-4'>
                Read more
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Achievements</Card.Title>
              <Card.Text class='fs-12'>
                Outlet at Bhubaneswar Air Port <br />
                COFFEE TABLE <br /> Rural Mason Training Programme
              </Card.Text>
              <Button primary className='px-4 py-1 mt-4'>
                Read more
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default About;
