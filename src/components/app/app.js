import React, { Component } from "react";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import TopPanel from "../top-panel";
import BoardBlock from "../board-block";
import PaperContainer from "../paper-container";
import SignUp from "../sign-up";
import SignIn from "../sign-in";
import ErrorBoundary from "../error-boundary";

import "./app.scss";

function MainPage() {
  return (
    <Box>
      <Stack spacing={2} direction="column" justifyContent="center" alignItems="center">
        <TopPanel />
        <ErrorBoundary>
          <Container>
            <div className="main-container">
              <BoardBlock />
              <PaperContainer />
            </div>
          </Container>
        </ErrorBoundary>
      </Stack>
    </Box>
  );
}

export default class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Ой, здесь ничего нет! Похоже вы ввели неверный путь.</p>
              </main>
            }
          />
        </Routes>
      </>
    );
  }
}
