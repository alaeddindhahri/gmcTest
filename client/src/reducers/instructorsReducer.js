import { produce } from "immer";
//action types
import {
  GET_INSTRUCTORS,
  ADD_INSTRUCTOR,
  UPDATE_INSTRUCTOR,
  DELETE_INSTRUCTOR,
  INSTRUCTORS_LOADING,
  INSTRUCTORS_ERROR,
} from "../actions/types";

const initialState = {
  instructors: [],
  isLoading: false,
  errors: [],
  isError: false,
};

const instructorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INSTRUCTORS: {
      return { ...state, instructors: action.payload, isLoading: false };
    }
    case ADD_INSTRUCTOR: {
      return produce(state, (draftState) => {
        draftState.instructors.push(action.payload);
        draftState.isLoading = false;
      });
    }
    case UPDATE_INSTRUCTOR: {
      return {
        ...state,
        instructors: state.instructors.map((el) =>
          el._id === action.payload.id ? action.payload.updatedInstructor : el
        ),
        isLoading: false,
      };
    }
    case DELETE_INSTRUCTOR: {
      return {
        ...state,
        instructors: state.instructors.filter(
          (el) => el._id !== action.payload
        ),
        isLoading: false,
      };
    }
    case INSTRUCTORS_LOADING: {
      return { ...state, isLoading: true };
    }
    case INSTRUCTORS_ERROR: {
      return {
        ...state,
        errors: action.payload,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
export default instructorsReducer;
