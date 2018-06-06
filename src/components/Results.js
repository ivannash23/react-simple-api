import React, { Component } from "react";
import { Grid, Row, Thumbnail, Col, Button } from "react-bootstrap";

class Results extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          {this.props.searchResults.map((item, index) => (
            <Col key={index} lg={2} md={3} sm={3} xs={12}>
              <a href={item.source}>
                <img
                  className="img-fluid"
                  alt="Responsive image"
                  src={item.images.original.url}
                />
              </a>
            </Col>
          ))}
        </Row>
      </Grid>
    );
  }
}

export default Results;
