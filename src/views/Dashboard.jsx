/*!

=========================================================
* Black Dashboard PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// react plugin for creating vector maps
import VectorMap from "components/Map/VectorMap.jsx";
import BarGraph from "components/Charts/BarGraph.jsx";
import LineGraph from "components/Charts/LineGraph.jsx";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";


class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  // <Col xs="12">
  //   <Card className="card-chart">
  //     <CardHeader className="m-auto mr-auto">
  //         <CardTitle tag="h4">The following charts/graphs are displaying stock data. User generated data is coming soon. </CardTitle>
  //     </CardHeader>
  //   </Card>
  // </Col>

  render() {
    return (
      <div className="content">
      <Container>
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Total Streams</h5>
                    <CardTitle tag="h2">Performance</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <LineGraph
                  data={[100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100]}
                />
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" md="4">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div className="info-icon text-center icon-primary">
                      <i className="tim-icons icon-headphones" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Streams</p>
                      <CardTitle tag="h3">24,000</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="tim-icons icon-refresh-01" /> Refresh
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="4" md="4">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div className="info-icon text-center icon-primary">
                      <i className="tim-icons icon-shape-star" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Followers</p>
                      <CardTitle tag="h3">+25</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="tim-icons icon-send" /> Send Update
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="4" md="4">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div className="info-icon text-center icon-primary">
                      <i className="tim-icons icon-single-02" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Listeners</p>
                      <CardTitle tag="h3">1,400</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="tim-icons icon-pin" />Demographics
                </div>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Top Songs</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-trophy text-primary" />{" "}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <BarGraph
                  data={[53, 20, 10, 80, 100, 45]}
                />
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Avg. Stream Time</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-sound-wave text-primary" />{" "}
                  2:15
                </CardTitle>
              </CardHeader>
              <CardBody>
              <BarGraph
                data={[104, 31, 11, 92, 58, 71]}
              />
              </CardBody>
            </Card>
          </Col>
          <Col lg="12">
          <VectorMap />
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
