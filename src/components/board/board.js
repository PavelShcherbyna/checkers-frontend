import React, {Component} from 'react';
import classN from 'classnames';
import {Grid} from "@mui/material";
import { connect } from 'react-redux';

import WhiteChecker from "../white-checker";
import BlackChecker from "../black-checker";

import './board.scss';

class Board extends Component {

    render() {
        const { onCheckerClick, onCellClick } = this.props;
        return (
            <Grid container className={'board'}>
                {
                    this.props.board.map((arrRow, indexRow) => {
                        return (<Grid xs={12} item key={indexRow} className={'row'}>
                            {
                                arrRow.map((itemCell, indexCell) => {
                                    return(
                                        <Grid item
                                        key={indexCell}
                                        className={classN('cell', {'active':itemCell.isTarget === true})}
                                        data-row={indexRow}
                                        data-cell={indexCell}
                                        onClick={onCellClick}
                                        >
                                            { (itemCell.hasChecker === 'white') ? <WhiteChecker 
                                                                                                onCheckerClick={onCheckerClick}
                                                                                                isActive={this.props.whiteIsActive}
                                                                                                /> : null }
                                            { (itemCell.hasChecker === 'black') ? <BlackChecker 
                                                                                                onCheckerClick={onCheckerClick}
                                                                                                isActive={this.props.blackIsActive}
                                                                                                /> : null } 
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
};

const mapStateToProps = ({ board, whiteIsActive, blackIsActive }) => {
 return { board, whiteIsActive, blackIsActive };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCheckerClick: (event) => dispatch({ type: 'ON_CHACKER_CLICK', payload: event }),
        onCellClick: (event) => dispatch({ type: 'ON_CELL_CLICK', payload: event })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);