import React from "react";
import {Grid} from "@mui/material";

import "./bottom-letters.scss";


class BottomLetters extends React.Component {

    state = {lettersArr: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']};

    render() {
        return (
            <Grid container
                  spacing={0}
                  justifyContent="center"
                // flexWrap="nowrap"

                // justifyContent="flex-end"
                  className="bottom-letters"
            >
                {this.state.lettersArr.map((letter, letterNum) => {
                    return (
                        <Grid item xs={1.2} key={letterNum}>{letter}</Grid>
                    )
                })

                }
            </Grid>
        );
    }
}

export default BottomLetters;