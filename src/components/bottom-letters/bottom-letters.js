import React from "react";
import {Grid} from "@mui/material";

import "./bottom-letters.scss";


class BottomLetters extends React.Component {

    state = {lettersArr: [null, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', null]};

    render() {
        return (
            <Grid container
                  spacing={0}
                  justifyContent="center"
                  className="bottom-letters"
            >
                {this.state.lettersArr.map((letter, letterNum) => {
                    return (
                        <Grid item xs key={letterNum}>{letter}</Grid>
                    )
                })

                }
            </Grid>
        );
    }
}

export default BottomLetters;