function createBoard () {
    let board = [];
       for (let i = 0; i < 8; i++) {
         board.push([]);
         for (let j = 0; j < 8; j++) {
                        board[i].push({
            hasChecker: null
            });
         }
   }
   return board;
   }

   export default createBoard;