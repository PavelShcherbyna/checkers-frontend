import React from "react";
import { Typography } from "@mui/material";

import "./copyright.scss";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 5 }}
    >
      {"Copyright © "}
      {"EP Interns"} {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
