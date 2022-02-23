import React, { useState } from "react";
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";

import CaptionTipography from "../caption-tipography";
import Copyright from "../copyright";

import "./sign-in.scss";

export default function SignIn() {
  const [caption, setCaption] = useState("");
  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const dataObject = {
      email: `${formData.get("email")}`,
      password: `${formData.get("password")}`,
    };
    const data = JSON.stringify(dataObject);
    console.log(data);
    try {
      let responce = await fetch("http://localhost:3030/users/login", {
        method: "POST",
        body: data,
      });

      let result = await responce.json();
      console.log(result);
      if (result.status === "success") {
        localStorage.setItem("JWT", result.token);
        //document.cookie = `manuallyCreatedCookie=${token}`;
        navigate("/");
      } else {
        setCaption(result.message);
      }
    } catch (err) {
      console.log("Поймана ошибка:", err);
      if (err.message.includes("Failed to fetch")) {
        setCaption("Сервер не отвечает. Проверьте сетевое подключение.");
      } else {
        setCaption("Непредвиденная ошибка!");
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email адрес"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <CaptionTipography caption={caption} />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Войти
          </Button>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Link to="/" variant="body2">
                Назад к игре
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" variant="body2">
                Нет аккаунта? Зарегистрируйтесь
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
}
