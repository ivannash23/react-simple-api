import React, { Component } from "react";
import { Grid, Row, Thumbnail, Col, Button } from "react-bootstrap";

class Results extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          {this.props.searchResults.map((item, index) => (
            <Col key={index} lg={2} md={3} sm={3} xs={12}>
              <img
                className="img-fluid"
                alt="Responsive image"
                href={item.source}
                src={item.images.original.url}
              />
            </Col>
          ))}
        </Row>
      </Grid>
    );
  }
}

export default Results;
