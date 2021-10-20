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
              alignItems="center">
            <Grid item xs={1.2}><LeftNumbers /></Grid>
            <Grid item xs={9.6}><Board /></Grid>
            <Grid item xs={1.2}><div></div></Grid>
        </Grid>
    )
}

export default MiddleMainBlock;