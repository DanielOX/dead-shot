import React, { Component } from "react";
import { Card, Container } from "semantic-ui-react";
import Search from "./Components/Search";
import ServerVulnerability from "./Components/ServerVulnerability";
import WebTechnologies from "./Components/WebTechnologies";

import "./App.css";
import DeadShotLogo from "./logo.svg";
const width = {
  container: {
    width: "70%",
    margin: "0 auto"
  },
  card: {
    width: "100%"
  }
};
class App extends Component {
  render() {
    return (
      <Container style={width.container}>
        <div className="padder">
          <center>
            <img src={DeadShotLogo} alt="" />
            <br />
            <p style={{ fontSize: "18px" }}>
              Reconnaissance Your Site & Server
            </p>
          </center>
        </div>
        <br />
        <Search />
        <Card style={width.card}>
          <Card.Content>
            <ServerVulnerability />
          </Card.Content>
        </Card>

        <Card style={width.card}>
          <Card.Content>
            <WebTechnologies />
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default App;
