import React from "react";
import {AppBar} from "@mui/material";
import {Toolbar} from "@mui/material";
import {Grid} from "@mui/material";
import {Button} from "@mui/material";

import './top-panel.scss';

export default function TopPanel () {
    return(

            <AppBar className="top-panel" position="static">
                <Toolbar>
                    <Grid className="button-grid-container" container spacing={2}>
                        <Grid item xs={4}>
                            <Button variant="contained" ><span>Начать игру</span></Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" >Назад</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" >Сохранить</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

    );
}