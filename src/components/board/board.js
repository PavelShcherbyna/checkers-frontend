import React, { Component } from "react";
import classN from "classnames";
import { Grid } from "@mui/material";
import { connect } from "react-redux";

import WhiteChecker from "../white-checker";
import BlackChecker from "../black-checker";
import { ON_CELL_CLICK, ON_CHACKER_CLICK } from "../actions";

import "./board.scss";

class Board extends Component {
  render() {
    const { ON_CHACKER_CLICK, ON_CELL_CLICK } = this.props;
    return (
      <Grid container className={"board"}>
        {this.props.board.map((arrRow, indexRow) => {
          return (
            <Grid xs={12} item key={indexRow} className={"row"}>
              {arrRow.map((itemCell, indexCell) => {
                return (
                  <Grid
                    item
                    key={indexCell}
                    className={classN("cell", {
                      active: itemCell.isTarget === true,
                    })}
                    data-row={indexRow}
                    data-cell={indexCell}
                    onClick={(e) => ON_CELL_CLICK(e)}
                  >
                    {itemCell.hasChecker === "white" ? (
                      <WhiteChecker
                        onCheckerClick={(e) => ON_CHACKER_CLICK(e)}
                        isActive={this.props.whiteIsActive}
                      />
                    ) : null}
                    {itemCell.hasChecker === "black" ? (
                      <BlackChecker
                        onCheckerClick={(e) => ON_CHACKER_CLICK(e)}
                        isActive={this.props.blackIsActive}
                      />
                    ) : null}
                  </Grid>
                );
              })}
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

const mapStateToProps = ({ board, whiteIsActive, blackIsActive }) => {
  return { board, whiteIsActive, blackIsActive };
};

const mapDispatchToProps = {
  ON_CELL_CLICK,
  ON_CHACKER_CLICK,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
