import React, { useState } from "react";
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";

import Copyright from "../copyright";

import "./sign-up.scss";

export default function SignUp() {
  const [captName, setCaptName] = useState("");
  const [captEmail, setCaptEmail] = useState("");
  const [captPass, setCaptPass] = useState("");
  const [captPassConfirm, setCaptPassConfirm] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const dataObject = {
      name: `${formData.get("name")}`,
      email: `${formData.get("email")}`,
      password: `${formData.get("password")}`,
      passwordConfirm: `${formData.get("passwordConfirm")}`,
    };
    const data = JSON.stringify(dataObject);

    try {
      let responce = await fetch("http://127.0.0.1:3030/users/signup", {
        method: "POST",
        body: data,
      });

      let result = await responce.json();
      console.log(result);
      if (result.status === "success") {
        alert(`Поздравляю тебя, ${result.data.user.name}, ты успешно зарегистрирован(а)!`);

        localStorage.setItem("JWT", result.token);
        navigate("/");
      } else {
        if (result.message.startsWith("User validation failed")) {
          if (result.message.includes("name:")) {
            if (result.message.includes("Имя должно содержать больше одного символа")) {
              setCaptName("Имя должно быть длиннее одного символа");
            } else if (result.message.includes("Имя не содержит букв!")) {
              setCaptName("Имя должно содержать хотя бы одну букву!");
            } else {
              setCaptName("Пожалуйста, укажите своё имя");
            }
          } else {
            setCaptName("");
          }
          if (result.message.includes("email:")) {
            if (result.message.includes("Пожалуйста, укажите e-mail.")) {
              setCaptEmail("Пожалуйста, укажите e-mail");
            } else if (result.message.includes("Пожалуйста, укажите корректный e-mail.")) {
              setCaptEmail("Пожалуйста, укажите корректный e-mail.");
            }
          } else {
            setCaptEmail("");
          }
          if (result.message.includes("password:")) {
            if (result.message.includes("Пожалуйста, укажите пароль.")) {
              setCaptPass("Пожалуйста, укажите пароль");
            } else if (result.message.includes("Пароль должен быть длиннее 8 символов.")) {
              setCaptPass("Пароль слишком короткий. Придумайте пароль длиннее восьми символов.");
            }
          } else {
            setCaptPass("");
          }
          if (result.message.includes("passwordConfirm:")) {
            setCaptPassConfirm("Пароли не совпадают!");
          } else {
            setCaptPassConfirm("");
          }
        }
      }
    } catch (err) {
      console.log("Поймана ошибка:", err);
      alert("О нет, только не это! Что-то явно пошло не так...");
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
          Регистрация
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                className="signup-inputs"
                name="name"
                required
                fullWidth
                id="name"
                label="Имя"
                helperText={captName}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="signup-inputs"
                required
                fullWidth
                id="email"
                label="Email адрес"
                name="email"
                helperText={captEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="signup-inputs"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                helperText={captPass}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="signup-inputs"
                required
                fullWidth
                name="passwordConfirm"
                label="Подтверждение пароля"
                type="password"
                id="passwordConfirm"
                helperText={captPassConfirm}
              />
            </Grid>
          </Grid>

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Зарегистрироваться
          </Button>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Link to="/" variant="body2">
                Назад к игре
              </Link>
            </Grid>
            <Grid item>
              <Link to="/login" variant="body2">
                Уже есть аккаунт? Войдите
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
}
