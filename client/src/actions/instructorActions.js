import {
  INIT_INSTRUCTORS,
  INIT_DELETE_INSTRUCTOR,
  INIT_ADD_INSTRUCTOR,
  INIT_UPDATE_INSTRUCTOR,
  GET_INSTRUCTORS,
  INSTRUCTORS_LOADING,
} from "./types";

//initialize getting instructor
export const initInstructors = () => {
  return {
    type: INIT_INSTRUCTORS,
  };
};
//initialize deleting instructor
export const initDeleteInstructors = (id) => {
  return {
    type: INIT_DELETE_INSTRUCTOR,
    payload: id,
  };
};
//initialize add instructor
export const initAddInstructors = (newInstructor) => {
  return {
    type: INIT_ADD_INSTRUCTOR,
    payload: newInstructor,
  };
};
//initialize update instructor
export const initUpdateInstructors = (id, updatedInstructor) => {
  return {
    type: INIT_UPDATE_INSTRUCTOR,
    payload: { id, updatedInstructor },
  };
};

//get all instructors
export const getInstructors = (instructors) => {
  return { type: GET_INSTRUCTORS, payload: instructors };
};
// Instructors Loading
export const setInstructorsLoading = () => {
  return { type: INSTRUCTORS_LOADING };
};
