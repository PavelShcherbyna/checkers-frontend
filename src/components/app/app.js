import React from "react";
import {Stack} from "@mui/material";
import {Box} from "@mui/material";
import {Container} from "@mui/material";



import TopPanel from "../top-panel";
import BoardBlock from "../board-block";

function App() {
  return (
    <>
        <Box>
                <Stack spacing={2}
                       direction="column"
                       justifyContent="center"
                       alignItems="center"
                >
                    <TopPanel />
                    <Container>
                        <BoardBlock />
                    </Container>

                </Stack>
        </Box>
    </>
  );
}

export default App;
