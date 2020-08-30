import axios from "axios";
import {
  GET_INSTRUCTORS,
  ADD_INSTRUCTOR,
  UPDATE_INSTRUCTOR,
  DELETE_INSTRUCTOR,
  INSTRUCTORS_LOADING,
} from "./types";

//get all instructors
export const getInstructors = () => (dispatch) => {
  dispatch(setInstructorsLoading());
  axios
    .get("/api/instructors")
    .then((res) => dispatch({ type: GET_INSTRUCTORS, payload: res.data }))
    .catch((err) => console.log("Get instructors error: ", err));
};
//add new instructor
export const addInstructor = (newInstructor) => (dispatch) => {
  dispatch({ type: ADD_INSTRUCTOR });
  axios
    .post("/api/instructors/add", newInstructor)
    .then((res) => dispatch(getInstructors()))
    .catch((err) => console.log("err add new instructor "));
};
// delete instructor by id
export const deleteInstructor = (id) => (dispatch) => {
  dispatch({ type: DELETE_INSTRUCTOR });

  axios
    .delete(`/api/instructors/delete/${id}`)
    .then((res) => dispatch(getInstructors()))
    .catch((err) => console.log("err delete instructor"));
};

//update instructor by id
export const updateInstructor = (id, updatedInstructor) => (dispatch) => {
  dispatch({ type: UPDATE_INSTRUCTOR, payload: { id, updatedInstructor } });
  axios
    .put(`/api/instructors/update/${id}`, updatedInstructor)
    .then((res) => dispatch(getInstructors()))
    .catch((err) => console.log("update instructor error"));
};

// Instructors Loading
export const setInstructorsLoading = () => {
  return { type: INSTRUCTORS_LOADING };
};
