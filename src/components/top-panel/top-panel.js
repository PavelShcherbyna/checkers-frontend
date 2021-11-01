import React from "react";
import {AppBar} from "@mui/material";
import {Toolbar} from "@mui/material";
import {Grid} from "@mui/material";
import {Button} from "@mui/material";

import './top-panel.scss';

const  TopPanel = ({onStartClick}) => {
    
    return(
        
            <AppBar className="top-panel" position="static">
                <Toolbar>
                    <Grid className="button-grid-container" container spacing={2}>
                        <Grid item xs={4}>
                            <Button variant="contained" onClick={() => onStartClick()}>
                                <span>Начать игру</span></Button>
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

export default TopPanel;