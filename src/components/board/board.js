import React, {Component} from 'react';
import classN from 'classnames';
import {Grid} from "@mui/material";

import './board.scss';

class Board extends Component {
    state = {
        board: [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ]
    }
    onCellClick = (event) => {
        const {row, cell} = event.target.dataset;
        const rowNumber = +row;
        const cellNumber = +cell;
        const {board} = this.state;

        board.forEach((itemRow, indexRow) => {
            itemRow.forEach((itemCell, indexCell) => {
                //board[indexRow][indexCell] = +Boolean(indexRow === row && indexCell === cell);
                if(indexRow === rowNumber && indexCell === cellNumber){
                    board[indexRow][indexCell] = 1;
                } else {
                    board[indexRow][indexCell] = 0;
                }
            })
        });
        console.log(board);
        this.setState({board: [...board]});

    }
    render() {
        return (

            <Grid container className={'board'}>
                {
                    this.state.board.map((arrRow, indexRow) => {
                        return (<Grid xs={12} item key={indexRow} className={'row'}>
                            {
                                arrRow.map((itemCell, indexCell) => {
                                    return(
                                        <Grid item
                                        key={indexCell}
                                        className={classN('cell', {'active':itemCell === 1})}
                                        data-row={indexRow}
                                        data-cell={indexCell}
                                        onClick={this.onCellClick}
                                        >
                                            {itemCell}
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>)
                    })
                }
            </Grid>

        );
    }
}

export default Board;