import React, { Component } from "react";
import { AppBar, Toolbar, Grid, Button, Typography } from "@mui/material";
import { connect } from "react-redux";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { createRandomCoords, saveMyHistory } from "../utils";
import {
  CREATE_RND_POS,
  MOVE_BACK,
  FETCH_USER_DATA,
  DELETE_USER_DATA,
  LOAD_HISTORY_OF_MOVES,
} from "../actions";
import { Link } from "react-router-dom";

import "./top-panel.scss";

class TopPanel extends Component {
  componentDidMount() {
    this.props.FETCH_USER_DATA();
  }

  render() {
    const {
      CREATE_RND_POS,
      MOVE_BACK,
      currentUser,
      historyOfMoves,
      DELETE_USER_DATA,
      LOAD_HISTORY_OF_MOVES,
    } = this.props;
    const displayNotLogin = !currentUser.name ? "flex" : "none";
    const displayLogin = currentUser.name ? "flex" : "none";

    const startGameHandler = () => {
      const loadedHistory = currentUser.historyOfMoves;
      if (loadedHistory && loadedHistory.length > 0) {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("У вас есть сохранённая игра, загрузить сохранение?")) {
          return LOAD_HISTORY_OF_MOVES();
        }
      }
      return CREATE_RND_POS(createRandomCoords());
    };

    return (
      <AppBar className="top-panel" position="static">
        <Toolbar>
          <Grid className="button-grid-container" container spacing={2}>
            <Grid item xs={2}>
              <Typography
                className="account-info-not-login"
                component="div"
                sx={{ display: displayNotLogin }}
              >
                <AccountCircleIcon sx={{ fontSize: "2rem" }} /> {<Link to="/login">Войти</Link>}
              </Typography>

              <Typography className="account-info" component="div" sx={{ display: displayLogin }}>
                <HowToRegIcon sx={{ fontSize: "2rem", color: "green" }} />
                <span>{`${currentUser.name}`}</span>
                <Link to="/login" onClick={DELETE_USER_DATA}>
                  Выйти
                </Link>
              </Typography>
            </Grid>

            <Grid item xs={3}>
              <Button variant="contained" onClick={startGameHandler}>
                <span>Начать игру</span>
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={MOVE_BACK}>
                Назад
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={() => saveMyHistory(historyOfMoves)}>
                Сохранить
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = ({ currentUser, historyOfMoves }) => {
  return { currentUser, historyOfMoves };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         createRandomCoords: () => dispatch({ type: 'CREATE_RND_POS', payload: createRandomCoords() }),
//         moveBack: () => dispatch({ type: 'MOVE_BACK'})
//     }
// }

const mapDispatchToProps = {
  CREATE_RND_POS,
  MOVE_BACK,
  FETCH_USER_DATA,
  DELETE_USER_DATA,
  LOAD_HISTORY_OF_MOVES,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopPanel);
