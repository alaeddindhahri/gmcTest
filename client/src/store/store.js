import { createStore, applyMiddleware, compose } from "redux";

import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import { watchInstructors } from "../sagas/rootSaga";

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(watchInstructors);
export default store;
