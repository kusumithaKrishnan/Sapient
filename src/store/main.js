// ...
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import sagas from "./rootSaga";
import reducers from "./rootReducer";
import logger from "redux-logger";

const middleWare = [];
const sagaMiddleware = createSagaMiddleware();
middleWare.push(sagaMiddleware);
middleWare.push(logger);
const store = createStore(reducers, compose(applyMiddleware(...middleWare)));
sagaMiddleware.run(sagas);
export { store };
