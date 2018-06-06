import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

class Search extends Component {
  render() {
    return (
      <Grid className="Search">
        <Row>
          <Col className="col" xs={12} md={12} sm={12} lg={12}>
            <h1>Search for your favorite gif!</h1>
          </Col>
        </Row>
        <Row>
          <Col className="col" xs={12} md={12} sm={12} lg={12}>
            <form className="Search-form" onSubmit={this.props.handleSubmit}>
              <input
                type="text"
                value={this.props.query}
                onChange={this.props.handleChange}
                placeholder="Type Here"
                size="50"
              />
              <input type="submit" value="Search" />
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Search;
