//import { put, takeLatest } from "redux-saga/effects";

// let responce = await fetch("http://localhost:3030/users/me", {
//         credentials: "include",
//         method: "GET",
//       });

//       let result = await responce.json();
//       console.log(result);

// function* fetchUsers() {
//   const userData = yield fetch("http://localhost:3030/users/me", {
//     credentials: "include",
//     method: "GET",
//   });
//   const userDataJSON = yield userData.json();
//   yield put({ type: "FETCH_USER_DATA", userDataJSON });
// }

export default function* rootSaga() {
  //   yield takeLatest("FETCH_USER_DATA", fetchUsers);
}
