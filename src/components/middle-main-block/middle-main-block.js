import React from "react";

import "./middle-main-block.scss";
import {Grid} from "@mui/material";
import LeftNumbers from "../left-numbers";
import Board from "../board";

function MiddleMainBlock () {
    return (
        <Grid container //sx={{margin: "0 auto"}}
              className="middle-main-block"
              direction="row"
              justifyContent="center"
              alignItems="stretch">
            <Grid item xs={1}><LeftNumbers /></Grid>
            <Grid item xs={10}><Board /></Grid>
            <Grid item xs={1}><div></div></Grid>
        </Grid>
    )
}

export default MiddleMainBlock;