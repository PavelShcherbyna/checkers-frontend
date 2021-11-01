import createBoard from "../utils/createBoard";

const initialState = {
    board: createBoard(),
    whiteIsNext: true,
    whiteIsActive: false,
    blackIsActive: false,
    currWhiteCheckerPos: [],
    currBlackCheckerPos: [],

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_RND_POS':
            let newArr= [];
            for (let i = 0; i < 8; i++) {
                newArr.push([]);
                for (let j = 0; j < 8; j++) {
                    newArr[i].push({
                   hasChecker: null
                   });
                }
            }
            newArr[action.payload[0].x][action.payload[0].y].hasChecker = 'black';
            newArr[action.payload[1].x][action.payload[1].y].hasChecker = 'white';

            return {
                ...state,
                board: newArr,
                currWhiteCheckerPos: [action.payload[1].x, action.payload[1].y],
                currBlackCheckerPos: [action.payload[0].x, action.payload[0].y]
            };
        
        case 'ON_CHACKER_CLICK':
            let board = state.board;
            if (action.payload.target.id === 'white-checker' && state.whiteIsNext) {
                const x = state.currWhiteCheckerPos[0];
                const y = state.currWhiteCheckerPos[1];

                if (board[x - 1][y - 1] !== undefined) {
                    board[x - 1][y - 1].isTarget = board[x - 1][y - 1].hasChecker === null? !board[x - 1][y - 1].isTarget : false;
                }
                if (board[x - 1][y + 1] !== undefined) {
                    board[x - 1][y + 1].isTarget = board[x - 1][y + 1].hasChecker === null? !board[x - 1][y + 1].isTarget : false;
                }
                return {
                    ...state,
                    board: board,
                    whiteIsActive: !state.whiteIsActive
                }
            };
                            
            if (action.payload.target.id === 'black-checker' && !state.whiteIsNext) {
                const x = state.currBlackCheckerPos[0];
                const y = state.currBlackCheckerPos[1];

                if (board[x + 1][y - 1] !== undefined) {
                    board[x + 1][y - 1].isTarget = board[x + 1][y - 1].hasChecker === null? !board[x + 1][y - 1].isTarget : false;
                }
                if (board[x + 1][y + 1] !== undefined) {
                    board[x + 1][y + 1].isTarget = board[x + 1][y + 1].hasChecker === null? !board[x + 1][y + 1].isTarget : false;
                }
                return {
                    ...state,
                    board: board,
                    blackIsActive: !state.blackIsActive
                }
            };

        case 'ON_CELL_CLICK':
            const {row, cell} = action.payload.target.dataset;
            const whitePos = state.currWhiteCheckerPos;
            const blackPos = state.currBlackCheckerPos;

            if(action.payload.target.dataset !== undefined && row !== undefined) {
                const rowNumber = +row;
                const cellNumber = +cell;
                const {board} = state;

                if(state.whiteIsNext && state.whiteIsActive){
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
                            
                        return {
                            ...state,
                            board: board,
                            whiteIsNext: !state.whiteIsNext,
                            currWhiteCheckerPos: [rowNumber, cellNumber],
                            whiteIsActive: false
                        }
                    }
                }
                if(!state.whiteIsNext && state.blackIsActive){
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

                            return {
                                ...state,
                                board: board,
                                whiteIsNext: !state.whiteIsNext,
                                currBlackCheckerPos: [rowNumber, cellNumber],
                                blackIsActive: false
                            }
                    }
                }
                
            }                                

        default: 
            return state;
    };
};

export default reducer;