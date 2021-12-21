import { createReducer } from "redux-act";
import { ON_CELL_CLICK, ON_CHACKER_CLICK, CREATE_RND_POS, MOVE_BACK, FETCH_USER_DATA } from "../actions";

import createBoard from "../utils/createBoard";

const initialState = () => ({
  board: createBoard(),
  whiteIsNext: true,
  whiteIsActive: false,
  blackIsActive: false,
  currWhiteCheckerPos: [],
  currBlackCheckerPos: [],
  historyOfMoves: [],
  currentUser: {},
});

const reducer = createReducer(
  {
    [CREATE_RND_POS]: (store, payload) => {
      let newArr = createBoard();
      const loadedHistory = store.currentUser.historyOfMoves;
      if (loadedHistory && loadedHistory.length > 0) {
        // eslint-disable-next-line no-restricted-globals
        const isSaveLoad = confirm("У вас есть сохранённая игра, загрузить сохранение?");
        if (isSaveLoad) {
          const lastSavedMove = loadedHistory[loadedHistory.length - 1];
          newArr[lastSavedMove.blackX][lastSavedMove.blackY].hasChecker = "black";
          newArr[lastSavedMove.whiteX][lastSavedMove.whiteY].hasChecker = "white";

          const turn = lastSavedMove.type === "black" ? true : false;
          return {
            ...store,
            board: [...newArr],
            historyOfMoves: loadedHistory,
            currWhiteCheckerPos: [lastSavedMove.whiteX, lastSavedMove.whiteY],
            currBlackCheckerPos: [lastSavedMove.blackX, lastSavedMove.blackY],
            whiteIsNext: turn,
          };
        }
      }
      newArr[payload[0].x][payload[0].y].hasChecker = "black";
      newArr[payload[1].x][payload[1].y].hasChecker = "white";
      return {
        ...store,
        board: newArr,
        // currWhiteCheckerPos: [action.payload[1].x, action.payload[1].y],
        // currBlackCheckerPos: [action.payload[0].x, action.payload[0].y],
        whiteIsNext: true,
        historyOfMoves: [
          {
            type: null,
            step: null,
            blackX: payload[0].x,
            blackY: payload[0].y,
            whiteX: payload[1].x,
            whiteY: payload[1].y,
          },
        ],
      };
    },

    [ON_CHACKER_CLICK]: (store, payload) => {
      let board = store.board;
      if (payload.target.id === "white-checker" && store.whiteIsNext) {
        let x;
        let y;
        board.forEach((itemRow, indexRow) => {
          itemRow.forEach((itemCell, indexCell) => {
            if (board[indexRow][indexCell].hasChecker === "white") {
              x = indexRow;
              y = indexCell;
            }
          });
        });
        // const x = state.currWhiteCheckerPos[0];
        // const y = state.currWhiteCheckerPos[1];

        if (board[x - 1] === undefined) {
          alert("У белой шашки закончились варианты хода! Ход передаётся чёрной шашке!");
          return {
            ...store,
            whiteIsNext: false,
          };
        }

        if (board[x - 1][y - 1] !== undefined) {
          board[x - 1][y - 1].isTarget =
            board[x - 1][y - 1].hasChecker === null ? !board[x - 1][y - 1].isTarget : false;
        }
        if (board[x - 1][y + 1] !== undefined) {
          board[x - 1][y + 1].isTarget =
            board[x - 1][y + 1].hasChecker === null ? !board[x - 1][y + 1].isTarget : false;
        }
        return {
          ...store,
          board: board,
          whiteIsActive: !store.whiteIsActive,
          currWhiteCheckerPos: [x, y],
        };
      }

      if (payload.target.id === "black-checker" && !store.whiteIsNext) {
        let x;
        let y;
        board.forEach((itemRow, indexRow) => {
          itemRow.forEach((itemCell, indexCell) => {
            if (board[indexRow][indexCell].hasChecker === "black") {
              x = indexRow;
              y = indexCell;
            }
          });
        });
        // const x = state.currBlackCheckerPos[0];
        // const y = state.currBlackCheckerPos[1];

        if (board[x + 1] === undefined) {
          alert("У чёрной шашки закончились варианты хода! Ход передаётся белой шашке!");
          return {
            ...store,
            whiteIsNext: true,
          };
        }

        if (board[x + 1][y - 1] !== undefined) {
          board[x + 1][y - 1].isTarget =
            board[x + 1][y - 1].hasChecker === null ? !board[x + 1][y - 1].isTarget : false;
        }
        if (board[x + 1][y + 1] !== undefined) {
          board[x + 1][y + 1].isTarget =
            board[x + 1][y + 1].hasChecker === null ? !board[x + 1][y + 1].isTarget : false;
        }
        return {
          ...store,
          board: board,
          blackIsActive: !store.blackIsActive,
          currBlackCheckerPos: [x, y],
        };
      }
      return {
        ...store,
      };
    },
    [ON_CELL_CLICK]: (store, payload) => {
      const { row, cell } = payload.target.dataset;
      const whitePos = store.currWhiteCheckerPos;
      const blackPos = store.currBlackCheckerPos;
      let newHistory = store.historyOfMoves;
      const numbers = [8, 7, 6, 5, 4, 3, 2, 1];
      const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

      if (payload.target.dataset !== undefined && row !== undefined) {
        const rowNumber = +row;
        const cellNumber = +cell;
        const { board } = store;
        let toX = numbers[rowNumber];
        let toY = letters[cellNumber];
        const previousMove = store.historyOfMoves[store.historyOfMoves.length - 1];

        if (store.whiteIsNext && store.whiteIsActive && board[whitePos[0] - 1] !== undefined) {
          if (
            board[rowNumber][cellNumber] === board[whitePos[0] - 1][whitePos[1] - 1] ||
            board[rowNumber][cellNumber] === board[whitePos[0] - 1][whitePos[1] + 1]
          ) {
            let fromX = numbers[whitePos[0]];
            let fromY = letters[whitePos[1]];
            newHistory.push({
              type: "white",
              step: `Ходит с "${fromX}-${fromY}" на "${toX}-${toY}"`,
              whiteX: rowNumber,
              whiteY: cellNumber,
              blackX: previousMove.blackX,
              blackY: previousMove.blackY,
            });

            board.forEach((itemRow, indexRow) => {
              itemRow.forEach((itemCell, indexCell) => {
                board[indexRow][indexCell].isTarget = false;
              });
            });
            board.forEach((itemRow, indexRow) => {
              itemRow.forEach((itemCell, indexCell) => {
                if (board[indexRow][indexCell].hasChecker === "white") {
                  board[indexRow][indexCell].hasChecker = null;
                }
              });
            });
            board.forEach((itemRow, indexRow) => {
              itemRow.forEach((itemCell, indexCell) => {
                if (indexRow === rowNumber && indexCell === cellNumber) {
                  board[indexRow][indexCell].hasChecker = "white";
                }
              });
            });

            return {
              ...store,
              board: board,
              whiteIsNext: !store.whiteIsNext,
              currWhiteCheckerPos: [rowNumber, cellNumber],
              whiteIsActive: false,
              historyOfMoves: [...newHistory],
            };
          }
        }
        if (!store.whiteIsNext && store.blackIsActive && board[blackPos[0] + 1] !== undefined) {
          if (
            board[rowNumber][cellNumber] === board[blackPos[0] + 1][blackPos[1] - 1] ||
            board[rowNumber][cellNumber] === board[blackPos[0] + 1][blackPos[1] + 1]
          ) {
            let fromX = numbers[blackPos[0]];
            let fromY = letters[blackPos[1]];
            newHistory.push({
              type: "black",
              step: `Ходит с "${fromX}-${fromY}" на "${toX}-${toY}"`,
              whiteX: previousMove.whiteX,
              whiteY: previousMove.whiteY,
              blackX: rowNumber,
              blackY: cellNumber,
            });

            board.forEach((itemRow, indexRow) => {
              itemRow.forEach((itemCell, indexCell) => {
                board[indexRow][indexCell].isTarget = false;
              });
            });
            board.forEach((itemRow, indexRow) => {
              itemRow.forEach((itemCell, indexCell) => {
                if (board[indexRow][indexCell].hasChecker === "black") {
                  board[indexRow][indexCell].hasChecker = null;
                }
              });
            });
            board.forEach((itemRow, indexRow) => {
              itemRow.forEach((itemCell, indexCell) => {
                if (indexRow === rowNumber && indexCell === cellNumber) {
                  board[indexRow][indexCell].hasChecker = "black";
                }
              });
            });

            return {
              ...store,
              board: board,
              whiteIsNext: !store.whiteIsNext,
              currBlackCheckerPos: [rowNumber, cellNumber],
              blackIsActive: false,
              historyOfMoves: [...newHistory],
            };
          }
        }
      }
      return {
        ...store,
      };
    },
    [MOVE_BACK]: (store) => {
      const historyOfMoves = store.historyOfMoves;
      const currentBoard = store.board;
      const movesLength = historyOfMoves.length;
      if (historyOfMoves.length > 1) {
        const stepBack = historyOfMoves[movesLength - 2];

        currentBoard.forEach((itemRow, indexRow) => {
          itemRow.forEach((itemCell, indexCell) => {
            if (currentBoard[indexRow][indexCell].hasChecker === "black") {
              currentBoard[indexRow][indexCell].hasChecker = null;
            }
            if (currentBoard[indexRow][indexCell].hasChecker === "white") {
              currentBoard[indexRow][indexCell].hasChecker = null;
            }
          });
        });
        currentBoard[stepBack.blackX][stepBack.blackY].hasChecker = "black";
        currentBoard[stepBack.whiteX][stepBack.whiteY].hasChecker = "white";

        const turn = stepBack.type === "black" ? true : false;

        //console.log(currentBoard)
        return {
          ...store,
          board: [...currentBoard],
          historyOfMoves: historyOfMoves.slice(0, movesLength - 1),
          currWhiteCheckerPos: [stepBack.whiteX, stepBack.whiteY],
          currBlackCheckerPos: [stepBack.blackX, stepBack.blackY],
          whiteIsNext: turn,
        };
      }
      return {
        ...store,
      };
    },
    [FETCH_USER_DATA]: (store, payload) => {
      console.log(payload);
      if (payload) {
        return {
          ...store,
          currentUser: payload.data.user,
        };
      }
      return {
        ...store,
      };
    },
  },
  initialState()
);

export default reducer;
