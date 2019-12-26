import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VerticalTabs from "./components/VerticalTabs";


function App() {
  return (
      <VerticalTabs />
      /*<Tab.Container unmountOnExit={true} mountOnEnter={true} id="left-tabs-example" defaultActiveKey="first">
          <Row>
              <Col md={2}>
                  <Nav justify variant="tabs" className="flex-column">
                      <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                  </Nav>
              </Col>
              <Col>
                  <Tab.Content>
                      <Tab.Pane eventKey="first">
                         Hello hgisdkfnsfw ifweif wofewiojgf oiew fhewo hfoiewfhweiohf owfio hwohfiweohfowhof i
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                          Hi
                      </Tab.Pane>
                  </Tab.Content>
              </Col>
          </Row>
      </Tab.Container>*/
  );
}

export default App;
