import React, { Component } from "react";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";

import "./app.scss";
import TopPanel from "../top-panel";
import BoardBlock from "../board-block";
import PaperContainer from "../paper-container";

export default class App extends Component {
  state = {};

  onStartClick = () => {
    console.log("Start Game!");
  };

  render() {
    return (
      <>
        <Box>
          <Stack
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <TopPanel onStartClick={this.onStartClick} />
            <Container>
              <div className="main-container">
                <BoardBlock />
                <PaperContainer />
              </div>
            </Container>
          </Stack>
        </Box>
      </>
    );
  }
}
