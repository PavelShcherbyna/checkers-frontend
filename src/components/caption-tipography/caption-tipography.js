import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import "./caption-tipography.scss";

export default class CaptionTipography extends Component {
  render() {
    return (
      <Typography className="caption-tipography" component="p" variant="body1">
        {this.props.caption}
      </Typography>
    );
  }
}
