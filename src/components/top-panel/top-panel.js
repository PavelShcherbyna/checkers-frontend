import React from "react";
import {AppBar} from "@mui/material";
import {Toolbar} from "@mui/material";
import {Grid} from "@mui/material";
import {Button} from "@mui/material";
import { connect } from "react-redux";

import { createRandomCoords } from "../utils";
import './top-panel.scss';
import {  CREATE_RND_POS, MOVE_BACK } from '../actions';

const  TopPanel = ({CREATE_RND_POS, MOVE_BACK}) => {
    
    return(
        
            <AppBar className="top-panel" position="static">
                <Toolbar>
                    <Grid className="button-grid-container" container spacing={2}>
                        <Grid item xs={4}>
                            <Button variant="contained" onClick={() => CREATE_RND_POS(createRandomCoords())}>
                                <span>Начать игру</span></Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" onClick={MOVE_BACK}>Назад</Button>
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         createRandomCoords: () => dispatch({ type: 'CREATE_RND_POS', payload: createRandomCoords() }),
//         moveBack: () => dispatch({ type: 'MOVE_BACK'})
//     }
// }

const mapDispatchToProps = {
    CREATE_RND_POS,
    MOVE_BACK
  }

export default connect(mapStateToProps, mapDispatchToProps)(TopPanel);