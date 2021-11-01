import React, {Component} from 'react';
import classN from 'classnames';
import {Grid} from "@mui/material";

import WhiteChecker from "../white-checker";
import BlackChecker from "../black-checker";

import './board.scss';

class Board extends Component {
    state = {
        board: [
            [{ hasChecker: null }, { hasChecker: 'black' }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }],
            [{ hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }],
            [{ hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }],
            [{ hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }],
            [{ hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }],
            [{ hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }],
            [{ hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }],
            [{ hasChecker: null }, { hasChecker: null }, { hasChecker: 'white' }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }, { hasChecker: null }]
        ],
        x : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        y: [8, 7, 6, 5, 4, 3, 2, 1],
        currWhiteCheckerPos: [7, 2],
        currBlackCheckerPos: [0, 1],
        whiteIsActive: false,
        blackIsActive: false,
        // whiteChecker: {position: [7, 2], isActive: false},
        // blackChecker: {position: [0, 1], isActive: false},
        whiteIsNext: true
    }
    //componentDidMount{};

    onCellClick = (event) => {
            const {row, cell} = event.target.dataset;
            const whitePos = this.state.currWhiteCheckerPos;
            const blackPos = this.state.currBlackCheckerPos;

            if(row !== undefined) {
                const rowNumber = +row;
                const cellNumber = +cell;
                const {board} = this.state;
               // const eventId = board[rowNumber][cellNumber].id;

                if(this.state.whiteIsNext && this.state.whiteIsActive){
                    if( (board[rowNumber][cellNumber] === board[whitePos[0] - 1][whitePos[1] -1])
                            || (board[rowNumber][cellNumber] === board[whitePos[0] - 1][whitePos[1] +1]) ){

                        board.forEach((itemRow, indexRow) => {
                            itemRow.forEach((itemCell, indexCell) => {
                                board[indexRow][indexCell].isTarget = false;
                            })
                        });
                        board.forEach((itemRow, indexRow) => {
                                itemRow.forEach((itemCell, indexCell) => {
                                    if(board[indexRow][indexCell].hasChecker === 'white'){
                                        board[indexRow][indexCell].hasChecker = null;
                                    }
                                })
                        });
                        board.forEach((itemRow, indexRow) => {
                            itemRow.forEach((itemCell, indexCell) => {
                                if(indexRow === rowNumber && indexCell === cellNumber){
                                    board[indexRow][indexCell].hasChecker = 'white';
                                }
                            })
                        });
                            this.setState({ board: [...board],whiteIsNext: !this.state.whiteIsNext,
                                currWhiteCheckerPos: [rowNumber, cellNumber], whiteIsActive: false });

                        // this.setState({ whiteCheckerPosition: eventId, whiteIsNext: !this.state.whiteIsNext,
                        //     currWhiteCheckerPos: [rowNumber, cellNumber]});
                    }
                } else if(!this.state.whiteIsNext && this.state.blackIsActive){
                    if( (board[rowNumber][cellNumber] === board[blackPos[0] + 1][blackPos[1] -1])
                            || (board[rowNumber][cellNumber] === board[blackPos[0] + 1][blackPos[1] +1]) ){

                        board.forEach((itemRow, indexRow) => {
                            itemRow.forEach((itemCell, indexCell) => {
                                board[indexRow][indexCell].isTarget = false;
                            })
                        });
                        board.forEach((itemRow, indexRow) => {
                            itemRow.forEach((itemCell, indexCell) => {
                                if(board[indexRow][indexCell].hasChecker === 'black'){
                                    board[indexRow][indexCell].hasChecker = null;
                                }
                            })
                        });
                        board.forEach((itemRow, indexRow) => {
                            itemRow.forEach((itemCell, indexCell) => {
                                if(indexRow === rowNumber && indexCell === cellNumber){
                                    board[indexRow][indexCell].hasChecker = 'black';
                                }
                            })
                        });

                        this.setState({ board: [...board], whiteIsNext: !this.state.whiteIsNext,
                            currBlackCheckerPos: [rowNumber, cellNumber], blackIsActive: false });
                    }
                }
            }
        // board.forEach((itemRow, indexRow) => {
        //     itemRow.forEach((itemCell, indexCell) => {
        //
        //         board[indexRow][indexCell] = +Boolean(indexRow === row && indexCell === cell);
        //         if(indexRow === rowNumber && indexCell === cellNumber){
        //             board[indexRow][indexCell] = 1;
        //         } else {
        //             board[indexRow][indexCell] = 0;
        //         }
        //     })
        // });
       // console.log(board);
        //this.setState({board: [...board]});
    }

    onCheckerClick = (event) => {
        const {board} = this.state;

        if (event.target.id === 'white-checker' && this.state.whiteIsNext) {
            this.setState({whiteIsActive: !this.state.whiteIsActive});
            const x = this.state.currWhiteCheckerPos[0];
            const y = this.state.currWhiteCheckerPos[1];
            if (board[x - 1][y - 1] !== undefined) {
                board[x - 1][y - 1].isTarget = board[x - 1][y - 1].hasChecker === null? true : false;
                this.setState({board: [...board]});
            }
            if (board[x - 1][y + 1] !== undefined) {
                board[x - 1][y + 1].isTarget = board[x - 1][y + 1].hasChecker === null? true : false;
                this.setState({board: [...board]});
            }


        } else if (event.target.id === 'black-checker' && !this.state.whiteIsNext) {
            this.setState({blackIsActive: !this.state.blackIsActive});
            const x = this.state.currBlackCheckerPos[0];
            const y = this.state.currBlackCheckerPos[1];
            if (board[x + 1][y - 1] !== undefined) {
                board[x + 1][y - 1].isTarget = board[x + 1][y - 1].hasChecker === null? true : false;
                this.setState({board: [...board]});
            }
            if (board[x + 1][y + 1] !== undefined) {
                board[x + 1][y + 1].isTarget = board[x + 1][y + 1].hasChecker === null? true : false;
                this.setState({board: [...board]});
        }
    }
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
                                        className={classN('cell', {'active':itemCell.isTarget === true})}
                                        data-row={indexRow}
                                        data-cell={indexCell}
                                        onClick={this.onCellClick}
                                        >
                                            { (itemCell.hasChecker === 'white') ? <WhiteChecker onCheckerClick={this.onCheckerClick}
                                                                                                isActive={this.state.whiteIsActive}/> : null }
                                            { (itemCell.hasChecker === 'black') ? <BlackChecker onCheckerClick={this.onCheckerClick}
                                                                                                isActive={this.state.blackIsActive}/> : null }
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