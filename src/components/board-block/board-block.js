import React from "react";
import {Box, Grid} from "@mui/material";

import './board-block.scss';
import MiddleMainBlock from "../middle-main-block";
import BottomLetters from "../bottom-letters";


function BoardBlock () {
    return(
            <Box className={'board-block'}>
                <Grid container
                      direction="column"
                      alignItems="stretch"
                      className='board-block-wrapper'
                      justifyContent="space-between"
                >
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}><MiddleMainBlock /></Grid>
                    <Grid item xs={1}><BottomLetters /></Grid>
                </Grid>
            </Box>

    )
}

export default BoardBlock;