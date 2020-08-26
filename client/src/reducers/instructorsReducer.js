import {
  GET_INSTRUCTORS,
  ADD_INSTRUCTOR,
  UPDATE_INSTRUCTOR,
  DELETE_INSTRUCTOR,
  INSTRUCTORS_LOADING,
} from "../actions/types";

const initialState = {
  instructors: [],
  isLoading: false,
};

const instructorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INSTRUCTORS: {
      return { ...state, instructors: action.payload, isLoading: false };
    }
    case ADD_INSTRUCTOR: {
      return { ...state, instructors: [...state.instructors, action.payload] };
    }
    case UPDATE_INSTRUCTOR: {
      return {
        ...state,
        instructors: state.instructors.map((el) =>
          el.id === action.payload.id ? action.payload : el
        ),
      };
    }
    case DELETE_INSTRUCTOR: {
      return {
        ...state,
        instructors: state.instructors.filter((el) => el.id !== action.payload),
      };
    }
    case INSTRUCTORS_LOADING: {
      return { ...state, isLoading: true };
    }
    default:
      return state;
  }
};
export default instructorsReducer;
