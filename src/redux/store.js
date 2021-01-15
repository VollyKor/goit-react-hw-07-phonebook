import {
  combineReducers,
  // createStore,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import logger from 'redux-logger';
import phonebookReducer from './phonebook/phonebook-reducer';

// vinilla redux
// ======================
const rootReducer = combineReducers({
  phonebook: phonebookReducer,
});

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
// export default store;

//  Redux toolkit
// ===============================
const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});
export default store;
