import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contentData from "../utils/contentData";

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">Further Information about this app</h2>
        <Row className="d-flex justify-content-between">
          {contentData.map((col, i) => (
            <Col key={i} md={5} className="mb-4">
              <h4 className="mb-3">
                <FontAwesomeIcon icon="volleyball-ball" className="mr-2" />
                {col.title}
              </h4>
              <p>{col.description}</p>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Content;
