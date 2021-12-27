import { put, call, takeEvery } from "redux-saga/effects";
import { SAVE_USER_DATA } from "../actions";
import { getMyInfo } from "../utils";

function* fetchUser() {
  const data = yield call(getMyInfo);

  yield put(SAVE_USER_DATA(data));
}

function deleteUser() {
  localStorage.removeItem("JWT");
}

export default function* rootSaga() {
  yield takeEvery("FETCH_USER_DATA", fetchUser);
  yield takeEvery("DELETE_USER_DATA", deleteUser);
}
