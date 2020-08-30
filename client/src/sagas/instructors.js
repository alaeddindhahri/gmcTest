import { put } from "redux-saga/effects";
import Store from "..//store/store";
import axios from "axios";
//action types
import {
  INSTRUCTORS_LOADING,
  INSTRUCTORS_ERROR,
  DELETE_INSTRUCTOR,
  UPDATE_INSTRUCTOR,
  ADD_INSTRUCTOR,
} from "../actions/types";
//actions
import { getInstructors } from "../actions/instructorActions";

//sagas
export function* getInstructorsSaga(action) {
  yield put({ type: INSTRUCTORS_LOADING });
  try {
    const response = yield axios.get("/api/instructors");
    yield put(getInstructors(response.data));
  } catch (err) {
    yield put({ type: INSTRUCTORS_ERROR, payload: err.message });
  }
}
export function* deleteInstructorSaga(action) {
  yield put({ type: INSTRUCTORS_LOADING });
  try {
    yield axios.delete(`/api/instructors/delete/${action.payload}`);
    Store.dispatch({
      type: DELETE_INSTRUCTOR,
      payload: action.payload,
    });
  } catch (err) {
    yield put({ type: INSTRUCTORS_ERROR, payload: err.message });
  }
}

export function* addInstructorSaga(action) {
  yield put({ type: INSTRUCTORS_LOADING });
  try {
    yield axios.post("/api/instructors/add", action.payload);

    Store.dispatch({
      type: ADD_INSTRUCTOR,
      payload: action.payload,
    });
  } catch (err) {
    yield put({ type: INSTRUCTORS_ERROR, payload: err.message });
  }
}
export function* updateInstructorSaga(action) {
  yield put({ type: INSTRUCTORS_LOADING });
  try {
    yield axios.put(
      `/api/instructors/update/${action.payload.id}`,
      action.payload.updatedInstructor
    );
    Store.dispatch({
      type: UPDATE_INSTRUCTOR,
      payload: action.payload,
    });
  } catch (err) {
    yield put({ type: INSTRUCTORS_ERROR, payload: err.message });
  }
}
