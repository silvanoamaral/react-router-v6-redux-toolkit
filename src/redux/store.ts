import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, routerReducer } from './history';
import { rootReducer } from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      ...rootReducer,
      router: routerReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(routerMiddleware, sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
}

export const store = makeStore()