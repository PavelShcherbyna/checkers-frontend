import React, { Component } from "react";
import { AppBar, Toolbar, Grid, Button, Typography } from "@mui/material";
import { connect } from "react-redux";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { createRandomCoords } from "../utils";
import { CREATE_RND_POS, MOVE_BACK, FETCH_USER_DATA } from "../actions";
import { Link } from "react-router-dom";

import "./top-panel.scss";

const getMyInfo = async () => {
  try {
    let responce = await fetch("http://localhost:3030/users/me", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("JWT")}`,
      },
      credentials: "include",
      method: "GET",
    });
    let result = await responce.json();
    if (result.status === "success") {
      return result;
    } else {
      console.log("getMyInfo Eroor:", result.message);
    }
  } catch (err) {
    console.log("Поймана ошибка:", err.message);
    //alert("О нет, только не это! Что-то явно пошло не так...");
  }
};

class TopPanel extends Component {
  componentDidMount() {
    getMyInfo().then((userData) => {
      this.props.FETCH_USER_DATA(userData);
    });
  }
  render() {
    const { CREATE_RND_POS, MOVE_BACK, currentUser, historyOfMoves } = this.props;
    const displayNotLogin = !currentUser.name ? "flex" : "none";
    const displayLogin = currentUser.name ? "flex" : "none";

    const saveMyHistory = async () => {
      const dataObject = {
        historyOfMoves: historyOfMoves,
      };
      const data = JSON.stringify(dataObject);
      try {
        let responce = await fetch("http://localhost:3030/users/saveMyHistory", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("JWT")}`,
          },
          credentials: "include",
          method: "PATCH",
          body: data,
        });
        let result = await responce.json();
        if (result.status === "success") {
          alert("Ваша история ходов сохранена");
        } else {
          if (result.message && result.message === "jwt expired") {
            alert("Срок авторизации вышел! Пожалуйста, войдите заново в Ваш аккаунт, что бы сохранить игру.");
          }
          // alert(result.message);
        }
      } catch (err) {
        console.log(err.message);
        if (err.message.includes("Failed to fetch")) {
          alert("Сервер не отвечает. Проверьте сетевое подключение.");
        } else {
          alert("Непредвиденная ошибка!");
        }
      }
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
                <Link to="/login">Выйти</Link>
              </Typography>
            </Grid>

            <Grid item xs={3}>
              <Button variant="contained" onClick={() => CREATE_RND_POS(createRandomCoords())}>
                <span>Начать игру</span>
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={MOVE_BACK}>
                Назад
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={saveMyHistory}>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(TopPanel);
