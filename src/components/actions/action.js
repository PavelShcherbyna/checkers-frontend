import { createAction } from "redux-act";

export const ON_CHACKER_CLICK = createAction("ON_CHACKER_CLICK");

export const ON_CELL_CLICK = createAction("ON_CELL_CLICK");

export const CREATE_RND_POS = createAction("CREATE_RND_POS");

export const MOVE_BACK = createAction("MOVE_BACK");

export const FETCH_USER_DATA = createAction("FETCH_USER_DATA");

export const SAVE_USER_DATA = createAction("SAVE_USER_DATA");

export const DELETE_USER_DATA = createAction("DELETE_USER_DATA");

export const LOAD_HISTORY_OF_MOVES = createAction("LOAD_HISTORY_OF_MOVES");
