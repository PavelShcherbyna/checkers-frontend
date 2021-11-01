import React from "react";
import {AppBar} from "@mui/material";
import {Toolbar} from "@mui/material";
import {Grid} from "@mui/material";
import {Button} from "@mui/material";
import { connect } from "react-redux";

import { createRandomCoords} from "../utils";
import './top-panel.scss';

const  TopPanel = ({createRandomCoords}) => {
    
    return(
        
            <AppBar className="top-panel" position="static">
                <Toolbar>
                    <Grid className="button-grid-container" container spacing={2}>
                        <Grid item xs={4}>
                            <Button variant="contained" onClick={createRandomCoords}>
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

const mapStateToProps = () => {
    return {};
   }

const mapDispatchToProps = (dispatch) => {
    return {
        createRandomCoords: (payload) => dispatch({ type: 'CREATE_RND_POS', payload: createRandomCoords()})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPanel);