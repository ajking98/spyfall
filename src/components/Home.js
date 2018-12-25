import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { FormAndInput } from './Form.js'
import './Home.css'


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Container className="container">
          <Row className="title">
            <Col sm="12" md="12" className="col">
              <a href="https://fontmeme.com/christmas-fonts/" /><img src="https://fontmeme.com/permalink/181225/e3647eda26ffa0189b616f009df211b6.png" alt="christmas-fonts" border="0" />
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} className="col"><FormAndInput /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default Home;
