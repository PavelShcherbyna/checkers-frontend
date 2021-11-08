import { createAction } from "redux-act"

// Старый вариант:
//import { createRandomCoords } from "../utils"

// export const ON_CHACKER_CLICK = (event) => {
//     return {
//         type: 'ON_CHACKER_CLICK',
//         payload: event
//     }
// }
// export const ON_CELL_CLICK = (event) => {
//     return {
//         type: 'ON_CELL_CLICK',
//         payload: event
//     }
// }
// export const CREATE_RND_POS = () => {
//     return {
//         type: 'CREATE_RND_POS',
//         payload: createRandomCoords()
//     }
// }
// export const MOVE_BACK = () => {
//     return {
//         type: 'MOVE_BACK',
//     }
// }




export const ON_CHACKER_CLICK =
  createAction('ON_CHACKER_CLICK');

  export const ON_CELL_CLICK =
  createAction('ON_CELL_CLICK');

  export const CREATE_RND_POS =
  createAction('CREATE_RND_POS');

  export const MOVE_BACK =
  createAction('MOVE_BACK');

