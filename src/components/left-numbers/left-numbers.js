import React from "react";
import {Grid} from "@mui/material";

import './left-numbers.scss';

class LeftNumbers extends React.Component {

    state = { numbersArr: [8, 7, 6, 5, 4, 3, 2, 1] };

    render() {
        return(
            <Grid container
                  spacing={0}
                  flexWrap="nowrap"
                  direction="column"
                  justifyContent="flex-end"
                  className="left-numbers"
            >
                {this.state.numbersArr.map((num, indexNum) => {
                    return(
                        <Grid item xs={12} key={indexNum}>{num}</Grid>
                    )
                })

                }
            </Grid>
        );
    }


}
 export default LeftNumbers;