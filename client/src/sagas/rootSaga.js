import { takeEvery } from "redux-saga/effects";
//sagas
import {
  getInstructorsSaga,
  deleteInstructorSaga,
  addInstructorSaga,
  updateInstructorSaga,
} from "./instructors";
//action types
import {
  INIT_INSTRUCTORS,
  INIT_DELETE_INSTRUCTOR,
  INIT_ADD_INSTRUCTOR,
  INIT_UPDATE_INSTRUCTOR,
} from "../actions/types";

//watcher
export function* watchInstructors() {
  yield takeEvery(INIT_INSTRUCTORS, getInstructorsSaga);
  yield takeEvery(INIT_DELETE_INSTRUCTOR, deleteInstructorSaga);
  yield takeEvery(INIT_ADD_INSTRUCTOR, addInstructorSaga);
  yield takeEvery(INIT_UPDATE_INSTRUCTOR, updateInstructorSaga);
}
